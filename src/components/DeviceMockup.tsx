import type { DeviceKind } from '../data/siteMeta';

interface DeviceMockupProps {
  kind: DeviceKind;
  graphic: React.ReactNode;
  // Real screenshot; when missing, the animated scene (or the abstract illustration) is shown instead
  image?: string;
  // Full-screen animated SVG app screen
  scene?: React.ReactNode;
  alt: string;
}

function DeviceMockup({ kind, graphic, image, scene, alt }: DeviceMockupProps) {
  return (
    <div className={`device device-${kind}`}>
      <div className="device-screen">
        {kind === 'browser' && (
          <div className="device-browser-bar" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {/* Real screenshots already include the status bar / notch */}
        {kind === 'phone' && !image && <div className="device-notch" aria-hidden="true"></div>}
        {image ? (
          <img className="device-image" src={image} alt={alt} loading="lazy" />
        ) : scene ? (
          <div className="device-scene">{scene}</div>
        ) : (
          <div className="device-ui" aria-hidden="true">
            <div className="device-ui-graphic">{graphic}</div>
            <div className="device-ui-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeviceMockup;
