import { useState } from 'react';

export function TypedIdComparison() {
  return (
    <section className="article-demo" aria-label="Swapped IDs comparison">
      <span className="demo-label">Same mistake, different outcome</span>
      <h4>What if the first two IDs are swapped?</h4>
      <pre><code>{'packDrawer(\n  drawerId, // expects flightId\n  flightId, // expects drawerId\n  drawerContainerId,\n)'}</code></pre>
      <div className="demo-comparison">
        <div>
          <strong>Strings → accepted</strong>
          <p>Both arguments are <code>String</code>. The names suggest a mistake, but the types allow it.</p>
        </div>
        <div>
          <strong>Distinct types → rejected</strong>
          <p><code>DrawerId</code> cannot fill a <code>FlightId</code> parameter, or vice versa. Caught before execution.</p>
        </div>
      </div>
      <p className="demo-caption">Types distinguish ID categories. They do not check whether an ID exists or belongs to the right flight.</p>
    </section>
  );
}

const commands = ['Connect', 'Authorize', 'Update firmware', 'Disconnect'];

export function PanLifetimeDiagram() {
  return (
    <section className="article-demo" aria-label="PAN transformation and lifetime">
      <span className="demo-label">Transformation is not disposal</span>
      <h4>Masking creates a second value—not a replacement</h4>
      <div className="demo-value-flow">
        <div><code>SensitivePan</code><span>Original still retained</span></div>
        <span className="demo-flow-arrow" aria-hidden="true">mask()</span>
        <div><code>MaskedPan</code><span>New display value</span></div>
      </div>
      <div className="demo-comparison">
        <div>
          <strong>What the type controls</strong>
          <p><code>displayPan(MaskedPan)</code> requires the masked representation at this API boundary.</p>
        </div>
        <div>
          <strong>What it does not control</strong>
          <p>The original <code>SensitivePan</code> still exists. Any retained reference can still access it.</p>
        </div>
      </div>
      <p className="demo-caption">In the wrapper below, consume() calls a callback but does not clear its stored value or prevent a second call. Callback scope is not secure erasure or enforced single use.</p>
    </section>
  );
}

export function RetryTimeoutDemo() {
  const [perAttempt, setPerAttempt] = useState(true);
  return (
    <section className="article-demo" aria-label="Retry and timeout ordering">
      <span className="demo-label">Wrapper order changes behavior</span>
      <h4>Does the retry get a fresh deadline?</h4>
      <p className="demo-caption">Fixed scenario: attempt 1 fails after 3 seconds. Attempt 2 needs 3 seconds to succeed. Timeout: 4 seconds; at most 2 attempts, no retry delay.</p>
      <div className="demo-controls" role="group" aria-label="Timeout scope">
        <button type="button" className={`btn ${perAttempt ? 'btn-primary' : 'btn-secondary'}`} aria-pressed={perAttempt}
          onClick={() => setPerAttempt(true)}>Per attempt</button>
        <button type="button" className={`btn ${!perAttempt ? 'btn-primary' : 'btn-secondary'}`} aria-pressed={!perAttempt}
          onClick={() => setPerAttempt(false)}>Whole operation</button>
      </div>
      <pre><code>{perAttempt ? 'Retry(Timeout(command, 4s), 2 attempts)' : 'Timeout(Retry(command, 2 attempts), 4s)'}</code></pre>
      <div className="demo-timeline" role="img" aria-label={perAttempt
        ? 'Attempt 1 runs from 0 to 3 seconds and fails. Attempt 2 runs from 3 to 6 seconds and succeeds.'
        : 'Attempt 1 runs from 0 to 3 seconds and fails. Attempt 2 runs from 3 to 4 seconds, when the overall deadline is reached.'}>
        <div className="demo-time-axis" aria-hidden="true"><span>0s</span><span>3s</span><span>6s</span></div>
        <div className="demo-time-track" aria-hidden="true">
          <span className="demo-time-attempt" style={{ width: '50%' }}>1 · fails</span>
          <span className="demo-time-attempt demo-time-retry" style={{ width: perAttempt ? '50%' : `${100 / 6}%` }}>2</span>
          <span className="demo-time-end" style={{ left: perAttempt ? '100%' : `${200 / 3}%` }}>{perAttempt ? '6s · success' : '4s · timeout'}</span>
        </div>
      </div>
      <p className="demo-result" aria-live="polite">{perAttempt
        ? 'Success at 6s: each 3-second attempt fits its own 4-second timeout.'
        : 'Timeout at 4s: the retry gets only 1 second of the shared budget.'}</p>
      <p className="demo-caption">Illustrative timing, not measured BLE performance. A timeout reports a deadline; stopping underlying device work requires cancellation support.</p>
    </section>
  );
}

export function CancellationDemo() {
  const [running, setRunning] = useState(false);
  const [requested, setRequested] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);
  const outcome = !requested ? running ? 'Running' : 'Queued'
    : !running ? 'Removed from queue' : acknowledged ? 'Stopped at a safe boundary' : 'Stop requested · still running';
  return (
    <section className="article-demo" aria-label="Queued versus running cancellation">
      <span className="demo-label">Cancel is a request, not a rewind</span>
      <h4>Has the command already started?</h4>
      <div className="demo-controls" role="group" aria-label="Command state before cancellation">
        {[false, true].map((value) => (
          <button key={String(value)} type="button" className={`btn ${running === value ? 'btn-primary' : 'btn-secondary'}`}
            aria-pressed={running === value} onClick={() => { setRunning(value); setRequested(false); setAcknowledged(false); }}>
            {value ? 'Already running' : 'Still queued'}
          </button>
        ))}
      </div>
      <div className="demo-cancel-state">
        <strong>Update firmware</strong>
        <span aria-live="polite">{outcome}</span>
      </div>
      <div className="demo-controls">
        <button type="button" className="btn btn-primary" disabled={requested} onClick={() => setRequested(true)}>Request cancel</button>
        {running && <button type="button" className="btn btn-secondary" disabled={!requested || acknowledged}
          onClick={() => setAcknowledged(true)}>Command acknowledges stop</button>}
      </div>
      <p className="demo-result" aria-live="polite">{!requested
        ? running ? 'The command has started sending data. Request cancellation to see what can still be controlled.' : 'The command has not touched the device. It can be removed before execution.'
        : !running ? 'No firmware data was sent by this command. The queued operation will not start.'
          : acknowledged ? 'Future work stops. Data already sent is not undone by cancellation.'
            : 'The request alone does not stop execution. The command must cooperate and reach a safe stopping point.'}</p>
      <p className="demo-caption">Modeled cooperative cancellation. Real firmware updates may have non-interruptible stages and need device-specific recovery.</p>
    </section>
  );
}

const queueStates = {
  connect: { step: 0, action: 'Connection succeeds', next: 'authorize', detail: 'Connect runs first. Authorization cannot start until the device is connected.' },
  authorize: { step: 1, action: 'Authorization succeeds', next: 'update', detail: 'Choose the authorization outcome. Firmware must wait for success.' },
  blocked: { step: 1, action: 'Retry authorization', next: 'retry', detail: 'Authorization failed. The queue is paused; firmware has not started.' },
  retry: { step: 1, action: 'Retry succeeds', next: 'update', detail: 'Only authorization is retried. Firmware stays blocked until it succeeds.' },
  update: { step: 2, action: 'Firmware update finishes', next: 'disconnect', detail: 'Authorization succeeded. Now the firmware update can run.' },
  disconnect: { step: 3, action: 'Disconnection finishes', next: 'done', detail: 'The update finished. Disconnect is the only command still running.' },
  done: { step: 4, action: 'Run again', next: 'connect', detail: 'All four commands completed in order. The device is disconnected.' },
} as const;

export function CommandQueueDemo() {
  const [state, setState] = useState<keyof typeof queueStates>('connect');
  const current = queueStates[state];
  const blocked = state === 'blocked' || state === 'retry';
  const canFail = state === 'authorize' || state === 'retry';

  return (
    <section className="article-demo" aria-label="Command queue walkthrough">
      <span className="demo-label">Explore the failure path</span>
      <h4>What happens when authorization fails?</h4>
      <ol className="demo-queue">
        {commands.map((command, index) => {
          const status = index < current.step ? 'done'
            : index === current.step ? state === 'blocked' ? 'failed' : 'active'
              : blocked ? 'blocked' : 'waiting';
          const label = { done: 'Complete', failed: 'Failed · queue paused', active: state === 'retry' ? 'Retrying' : 'Running', blocked: 'Blocked', waiting: 'Waiting' }[status];
          return (
            <li key={command} data-state={status} aria-current={index === current.step ? 'step' : undefined}>
              <span className="demo-step-number" aria-hidden="true">{index < current.step ? '✓' : index + 1}</span>
              <div><strong>{command}</strong><span>{label}</span></div>
            </li>
          );
        })}
      </ol>
      <p className="demo-result" aria-live="polite">{current.detail}</p>
      <div className="demo-controls">
        <button type="button" className="btn btn-primary"
          onClick={() => setState(current.next)}>{current.action}</button>
        <button type="button" className="btn btn-secondary" disabled={!canFail}
          onClick={() => { if (canFail) setState('blocked'); }}>Authorization fails</button>
        <button type="button" className="demo-restart" disabled={state === 'connect'}
          onClick={() => setState('connect')}>Restart</button>
      </div>
      <p className="demo-caption">Illustrative policy: pause on authorization failure and retry on demand. A sequential queue alone does not provide this policy.</p>
    </section>
  );
}
