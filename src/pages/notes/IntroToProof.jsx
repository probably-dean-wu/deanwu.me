import { Link } from 'react-router-dom';
import Page from '../../components/Page';

export default function IntroToProof() {
  return (
    <Page title="Intro to Proof">
      <h1>Introduction to Proofs</h1>
      <ul className="link-list">
        <li><Link to="/sets-and-propositions">Sets and Propositions</Link></li>
        <li><Link to="/logic">Logic</Link></li>
      </ul>
    </Page>
  );
}
