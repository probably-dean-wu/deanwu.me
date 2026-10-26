import Page from '../components/Page';

export default function Elevator() {
  return (
    <Page title="Elevator">
      <p className="eyebrow">2022</p>
      <h1>Elevator with Arduino</h1>
      <p className="lead">
        Since this is a school project, I don't have the code stored on my PC or on GitHub.
        It was made with the Arduino language, which is similar to C++.
      </p>
      {/* preload="none": nothing downloads until the visitor presses play. */}
      <video
        className="video"
        src="/elevator.mp4"
        poster="/elevator.jpg"
        width="608"
        height="1080"
        controls
        playsInline
        preload="none"
      />
    </Page>
  );
}
