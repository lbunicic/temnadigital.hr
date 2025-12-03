import { TypeDrivenGraphic, BluetoothGraphic } from '../components/BlogGraphics';

export const typeDrivenDesignPost = {
  id: 'type-driven-design',
  title: 'Type-Driven Design: Safer Software for Complex Domains',
  excerpt: 'Reducing bugs via Type Driven Design - exploring how encoding business rules into the type system can eliminate entire classes of bugs before they reach production.',
  category: 'Software Engineering',
  date: 'Oct 22, 2025',
  readTime: '12 min read',
  author: 'Lovro Buničić',
  graphic: <TypeDrivenGraphic />,
  originalLink: 'https://medium.com/@lovro.bunicic/type-driven-design-6412f29e3d5d',
  content: (
    <>
      <p className="blog-lead">
        Originally published for Most, makers of mobile POS and secure, offline‑capable payments for airlines, 
        trusted by Southwest, Hawaiian, Condor and more.
      </p>

      <h2>Reducing bugs via Type Driven Design</h2>

      <h3>Introduction</h3>
      <p>
        At the heart of every product lies its business domain — a set of concepts and rules that make it unique 
        and valuable to its users. These domain rules are often complex and subject to frequent change, making their 
        correct implementation a persistent challenge throughout the product's lifecycle.
      </p>
      <p>
        While teams use various techniques and tools to ensure correctness, standard tooling rarely enforces 
        domain-specific rules out of the box. This gap allows logic flaws to slip into production, sometimes 
        remaining undetected for extended periods.
      </p>
      <p>
        In our case, two of the highly complex domains merge, requiring a high level of domain knowledge, defensive 
        programming, and extensive validation and testing.
      </p>

      <h3>Types</h3>
      <p>
        Where do our tools fall short? That depends on how much we lean on the compiler. Languages with strong static 
        type systems already prevent entire classes of bugs at compile time. For example, trying to divide two words 
        won't compile — not because we remembered to add a check, or a QA workflow detected it, but because the type 
        system makes such logic impossible.
      </p>
      <p>
        This is the power of type safety: the compiler enforces constraints so developers don't have to. But we can — 
        and should — go further. By designing custom types and modeling our domain with precision, we encode business 
        rules into the type system. This shifts error checking from runtime to compile time, reducing the need for 
        defensive programming. The result is software that's easier to maintain, easier to refactor, and, most 
        importantly, harder to misuse.
      </p>
      <p>
        In short, we guide developers toward correct usage by making the valid paths obvious and the invalid ones 
        impossible or extremely difficult.
      </p>

      <h3>Example 1: Mixing IDs</h3>
      <p>
        In domains such as airline logistics, entities like flights, containers, and flight legs often use IDs that 
        are represented as UUIDs or strings. While this approach provides a uniform interface, it also introduces the 
        risk of accidentally mixing up identifiers, subtle bugs that can be notoriously difficult to detect and resolve.
      </p>
      <p>
        When related concepts are modelled with similar types, it becomes ambiguous which specific ID the API expects 
        in a given context. Developers are then forced to rely on documentation or delve into implementation details to 
        determine the correct identifier — an inefficient and error-prone process.
      </p>
      <p>
        For example, when packing a drawer, multiple drawer IDs may be available, but without clear type distinctions, 
        it is not immediately obvious which one should be used.
      </p>
      <pre><code>{`void packDrawer(
  String flightId,
  String drawerId,
  String drawerContainerId,
)`}</code></pre>
      <p>
        By encoding the meaning and distinction between the IDs into separate types, we constrain the usage of our API 
        and disallow misuse.
      </p>
      <pre><code>{`void packDrawer(
  FlightId flightId,
  DrawerId drawerId,
  DrawerContainerId drawerContainerId,
)`}</code></pre>
      <p>
        When packing a drawer, the correct usage becomes immediately clear and misuse is virtually impossible. The 
        compiler will catch any errors at an early stage, long before the code has a chance to reach production.
      </p>
      <p>
        The intention is clear. To make this a bit easier, we can construct a phantom type ID.
      </p>
      <p>
        Phantom types are generic types that don't use the generic property. The generic parts are only to distinguish 
        between the different types.
      </p>
      <pre><code>{`class ID<T> {
  final String value;
  const ID(this.value);
}

typedef FlightId = ID<Flight>;
typedef DrawerId = ID<Drawer>;
typedef DrawerContainerId = ID<DrawerContainer>;`}</code></pre>
      <p>
        We can add some syntax sugar to make the distinction between the IDs even more pronounced.
      </p>
      <pre><code>{`extension FlightExtension on Flight {
  static FlightId id(String value) => FlightId(value);
}

final flightId = FlightExtension.id("123");`}</code></pre>
      <p>
        If the ID is indeed meant to be shared between the models, we can compose an ID constraint referencing the 
        different models.
      </p>
      <pre><code>{`typedef DrawerId = ID<Drawer>; // Can be used for both Drawer and DrawerContainer`}</code></pre>

      <h3>Example 2. PAN</h3>
      <p>
        Another one of the highly complex industries is the payment card industry. The system must delete references 
        to the user's card information as soon as it's no longer needed. And while in the system, it may be used only 
        for the narrow functionality of taking a payment, and doing so in a secure manner. One of the most sensitive 
        pieces of information is the PAN, but it is just a String. So, having to remember to validate a pan, not to 
        log it anywhere, not to display it in the UI unmasked, and so on. The system may even have modules that only 
        allow for masked PAN or truncated PAN. So, whenever a change or feature is implemented that affects any of 
        those aspects, the developer bears the responsibility for ensuring safety, followed by the reviewer and then 
        the tester.
      </p>
      <p>
        By applying the concepts of type-driven design, step by step, we'll create a solution that solves the majority 
        of the mentioned concerns.
      </p>

      <h4>1. Validating</h4>
      <p>
        Instead of PAN being a String, it should be — PAN. Instead of validating the String through the system, we 
        instead parse the data as soon as we acquire it, so whenever there is a PAN, we can trust its validity.
      </p>
      <pre><code>{`class SensitivePan {
  final String value;
  
  SensitivePan._(this.value);
  
  static SensitivePan? parse(String value) {
    if (isValid(value)) {
      return SensitivePan._(value);
    }
    return null;
  }
}`}</code></pre>

      <h4>2. Ensuring safety</h4>
      <p>
        Instead of having to check if the PAN is masked or truncated before performing sensitive actions, we encode 
        different levels of PAN security in the type itself. So, by using some sort of union type, we add SensitivePan, 
        MaskedPan and TruncatedPan. Each of those provides getters and methods safe and appropriate for a given state. 
        E.g. possibility of logging, storage, or display should be different for different states. Also, some PANs 
        should not reach certain modules of the system.
      </p>
      <p>
        SensitivePan can be masked and truncated.
      </p>
      <pre><code>{`sealed class Pan {}

class SensitivePan extends Pan {
  final String value;
  
  SensitivePan._(this.value);
  
  MaskedPan mask() => MaskedPan(maskValue(value));
  TruncatedPan truncate() => TruncatedPan(truncateValue(value));
  
  static SensitivePan? parse(String value) {
    if (isValid(value)) {
      return SensitivePan._(value);
    }
    return null;
  }
}

class MaskedPan extends Pan {
  final String value;
  MaskedPan(this.value);
  
  TruncatedPan truncate() => TruncatedPan(truncateValue(value));
}

class TruncatedPan extends Pan {
  final String value;
  TruncatedPan(this.value);
}`}</code></pre>
      <p>
        Now, alongside being sure PAN is validated, we can also be sure it's safe to use in a given context. Certain 
        actions now only receive appropriate pan, making it obvious which pan to provide, and making it very hard to 
        misuse.
      </p>
      <pre><code>{`void displayPan(MaskedPan pan) { }
void logPan(TruncatedPan pan) { }
void storePan(TruncatedPan pan) { }`}</code></pre>

      <h4>3. Consuming it</h4>
      <p>
        After we have used up our sensitive payment information, the developers need to ensure that it is removed from 
        the system. But simply creating a truncated version won't prevent us from using or storing the sensitive one. 
        Some languages provide options for consumable types (e.g., consumable methods in Swift); in others, we can 
        achieve similar effects by adding a consumable type.
      </p>
      <pre><code>{`class Consumable<T> {
  final T _value;
  
  Consumable(this._value);
  
  void consume(void Function(T) block) {
    block(_value);
  }
}`}</code></pre>
      <p>
        Ultimately, we cannot prevent returned String from being copied or stored, but we are limiting the API surface 
        and making it obvious. Since SensitivePan will only be consumed inside a payment method, misuse can now only 
        happen in this isolated (and usually small) environment.
      </p>
      <pre><code>{`void takePayment(Consumable<SensitivePan> pan) {
  pan.consume((sensitivePan) {
    // Use the sensitive PAN here
    final truncated = sensitivePan.truncate();
    // Store truncated version
  });
  // sensitivePan is no longer accessible here
}`}</code></pre>

      <h3>Final Thoughts</h3>
      <p>
        Well-designed types do more than prevent bugs — they can eliminate entire classes of tests. For example, if 
        your types make invalid states unrepresentable, you don't need to write tests for those cases.
      </p>
      <p>
        Types also serve as live documentation, reducing reliance on external documentation that can quickly become 
        outdated.
      </p>
      <p>
        This becomes especially important when you are consuming an SDK or library where you don't have access to the 
        implementation details. As a consumer, you can't simply peek under the hood to figure out how things work or 
        why something fails. You don't need to reach out to the SDK provider for clarification or to debug subtle 
        issues — the type system itself makes the contract self-explanatory.
      </p>
      <p>
        Robust type systems also make large-scale refactoring safer and more predictable. When types encode your 
        business rules, the compiler guides you through changes and highlights places that need attention.
      </p>
      <p>
        Adopting type-driven design doesn't have to be all-or-nothing. You can start small, focusing on the most 
        error-prone or business-critical areas first. Take advantage of features your language already provides — like 
        enums with associated types, sealed classes for modeling choices, or consuming methods in Swift.
      </p>
      <p>
        By embedding our business constraints into the type system, we are able to free the developers from the tedious 
        need to repeatedly enforce and test domain rules and constraints, allowing them to focus their energy on 
        delivering real product value. While automatic and manual testing are still a crucial part of any development 
        workflow, a certain class of bugs is eliminated before they can be included in the codebase.
      </p>

      <hr style={{ margin: '48px 0', border: 'none', borderTop: '1px solid var(--border-color)' }} />

      <p>
        For a deeper dive into Type Driven Design, I highly recommend the series by Alex Ozun:{' '}
        <a href="https://swiftology.io/collections/type-driven-design/" target="_blank" rel="noopener noreferrer">
          https://swiftology.io/collections/type-driven-design/
        </a>
      </p>
    </>
  ),
};

export const bleSdkPost = {
  id: 'ble-sdk-architecture',
  title: 'Solving Architectural Problems in Bluetooth Low Energy Mobile Apps',
  excerpt: 'Learn how to create a solid BLE architecture using Command and Queue patterns to handle complex operations like OTA firmware updates.',
  category: 'Mobile Development',
  date: 'Jan 27, 2021',
  readTime: '10 min read',
  author: 'Lovro Buničić & Josip Grubeša',
  graphic: <BluetoothGraphic />,
  originalLink: 'https://arsfutura.com/blog/solving-architectural-problems-in-bluetooth-low-energy-mobile-apps',
  content: (
    <>
      <p className="blog-lead">
        Originally published on Ars Futura blog. Learn how to create a solid BLE architecture, 
        as solid as the Colosseum. 🏛
      </p>

      <h2>The Problem</h2>
      <p>
        On our most recent project, we've had the opportunity to work with Bluetooth Low Energy (BLE). 
        Starting with BLE on Android and iOS is quite simple, but more complex use cases often led us to 
        problems, if not addressed properly. Our app needed to be robust regarding the BLE connection and 
        ensure that BLE operations are executed synchronously.
      </p>
      <p>
        We would like to show you some issues we stumbled upon and the solutions we came up with. As an 
        example, we'll use the OTA (over the air) firmware update functionality. This process is usually 
        time-consuming and contains multiple interdependent operations.
      </p>
      <p>
        In our case, to perform such an update, we had to read the device's status to see if it's ready 
        to receive the update, subscribe to status characteristic, start sending multiple data chunks 
        depending on status received, and unsubscribe when complete status is received. Any other 
        non-related operations should not interfere with the update process.
      </p>

      <pre><code>{`connect(onComplete: {
    authorize(onComplete: {
        // OTA
        readPeripheralStatus(onComplete: {
            if peripheral is ready for update {
                subscribeToPeripheralStatus(onNext: {
                    if peripheral is ready for next write {
                        writeNextDataChunk()
                    } else if OTA is completed {
                        unsubscribeFromPeripheralStatus()
                        disconnect()
                    }
                })
                writeNextDataChunk()
            }
        })
        
        // Non related write operation
        write(onComplete: {
            disconnect()
        })
    })
})`}</code></pre>

      <p>
        Let's state the obvious. The pseudocode is too complex and adding any new functionalities (e.g. retry, 
        timeout) will make it even worse. We could identify multiple issues with the way it's written but that 
        wouldn't be the main problem.
      </p>
      <p>
        Scheduling simple read and write operations is usually handled by many Bluetooth libraries, but as soon 
        as we had to deal with operations that are dependent on each other, those libraries were not enough.
      </p>
      <p>
        Remember, the callbacks are asynchronous which means, while we wait for them to complete, other parts 
        of our code might be performing their own Bluetooth operations. As the code grows, you lose track of 
        what and when it happens.
      </p>
      <p>
        <strong>Can you find the bug in our simple example?</strong> The nonrelated write operation will be 
        executed immediately after the peripheral status read operation. Interfering of nonrelated operations 
        could easily happen in large and less straightforward apps or in apps in which these operations are 
        invoked by UI components.
      </p>

      <h2>Our Solution (Command + Queue)</h2>
      <p>
        The central component of our solution is the command queue.
      </p>
      <blockquote style={{ 
        borderLeft: '3px solid var(--accent-primary)', 
        paddingLeft: '20px', 
        marginLeft: 0,
        fontStyle: 'italic',
        color: 'var(--text-secondary)'
      }}>
        Command is a design pattern that turns a request into a stand-alone object that contains all 
        information about the request.
      </blockquote>
      <p>
        This transformation lets us queue and schedule each request's execution. By changing simple commands 
        that are mutually dependent into more complex ones, we can ensure the overall execution order and 
        improved robustness.
      </p>
      <p>
        In our example, the minimum requirement for an object to be a Command is to conform to the Command interface.
      </p>

      <pre><code>{`interface Command { 
    function execute() 
}`}</code></pre>

      <p>
        The queue executes each command when the previous one finishes so there is no more fear of asynchronous 
        operation interfering with one another and therefore no need for nested callbacks at the point of use. 
        Methods calls can now be simply written in the order in which we want them executed. If a command depends 
        on the result of the previous one, you should consider making a new one that will encapsulate them both.
      </p>
      <p>
        Furthermore, the concerns are now separated as each of the operations is managed by its own command. 
        Our code might now look like this:
      </p>

      <pre><code>{`queue.add(ConnectCommand())
queue.add(AuthorizationCommand())
queue.add(OTAUpdateCommand())
queue.add(DisconnectCommand())`}</code></pre>

      <p>
        Introducing new commands is quite easy and shouldn't ever break the code you already have. Many of these 
        commands can be written using generics which can significantly reduce code redundancy.
      </p>

      <h2>More Opportunities</h2>

      <h3>Retry and Timeout</h3>
      <p>
        By introducing the <strong>Proxy</strong> pattern to our solution, we can enhance the functionalities 
        of existing commands. For example, limiting execution time or retry mechanism can be easily applied. 
        This was especially useful in solving unstable BLE connection problems.
      </p>

      <pre><code>{`var command = SomeRandomCommand()
var timeoutCommand = TimeoutCommand(command)
var retryTimeoutCommand = RetryCommand(timeoutCommand)

queue.add(retryTimeoutCommand)`}</code></pre>

      <h3>Auto Connection, Auto Authorization</h3>
      <p>
        You can also take advantage of the <strong>Decorator</strong> pattern when dealing with the command queue.
      </p>
      <p>
        Let's say you need to execute some commands before or after every operation. Again, as an example, 
        we can use OTA:
      </p>

      <pre><code>{`var queue = BasicCommandQueue()

queue.add(ConnectionCommand())
queue.add(AuthorizationCommand())
queue.add(OTAUpdateCommand())
queue.add(DisconnectCommand())`}</code></pre>

      <p>
        By introducing queue decorators, we can centralize the connection and authorization code in one place:
      </p>

      <pre><code>{`AuthorizeCommandQueue(commandQueue) {
    var queue: BasicCommandQueue
    
    func add(command: Command) {
        queue.add(AuthorizationCommand())
        queue.add(command)
    }
}

ConnectionCommandQueue(commandQueue) {
    var queue: BasicCommandQueue
    
    func add(command: Command) {
        queue.add(ConnectCommand())
        queue.add(command)
        queue.add(DisconnectCommand())
    }
}

var commandQueue = BasicCommandQueue()
var authorizeCommandQueue = AuthorizeCommandQueue(commandQueue)
var connectionCommandQueue = ConnectionCommandQueue(authorizeCommandQueue)`}</code></pre>

      <p>
        From now on, add new operations to the queue without dealing with connection and authorization because 
        it's taken care of by the command queue decorators automatically.
      </p>

      <pre><code>{`connectionCommandQueue.add(OTAUpdateCommand())`}</code></pre>

      <p>
        And if for some reason we decide to disable or completely remove authorization from the system (change 
        request for example), all we need to do is leave out the authorization queue decorator.
      </p>

      <h3>Cancel</h3>
      <p>
        One more command pattern feature was of great value for us. Commands that are queued can be canceled. 
        We've implemented it by creating a Cancelable interface with just the cancel() method.
      </p>

      <pre><code>{`cancelableCommand = OTAUpdateCommand() // conforms to Cancelable 
queue.add(cancelableCommand)

// …
cancelableCommand.cancel()`}</code></pre>

      <h2>To Sum Up</h2>
      <p>
        Proposed solutions benefited us in many ways. We would definitely recommend it if your app requires 
        even a bit more complex operations. If your app's requirements change or the firmware guy decides to 
        add an extra cool feature, you'll be glad you're all set and ready.
      </p>
      <p>
        For those of you who are developing for Android and iOS, we prepared some sample code that should help 
        you get things started.
      </p>

      <h3>Further Reading</h3>
      <ul>
        <li>Command Pattern</li>
        <li>Proxy Pattern</li>
        <li>Decorator Pattern</li>
        <li>BLE - An Overview</li>
        <li>Bluetooth Low Energy: Essentials for Creating Software with Device to Smartphone Connectivity</li>
      </ul>
    </>
  ),
};

export const allBlogPosts = [
  typeDrivenDesignPost,
  bleSdkPost,
];

