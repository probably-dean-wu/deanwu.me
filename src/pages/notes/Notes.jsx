import { Link } from 'react-router-dom';
import Page from '../../components/Page';

export default function Notes() {
  return (
    <Page title="Notes">
      <h1>Notes</h1>
      <ul className="link-list">
        <li><Link to="/intro-to-proof">Introduction to Mathematical Proof</Link></li>
      </ul>
    </Page>
  );
}
