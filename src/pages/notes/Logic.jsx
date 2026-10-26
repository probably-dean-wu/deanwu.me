import Page from '../../components/Page';
function Logic() {
  return (
    <Page title="Logic">
        <h1> Logic </h1>
        <p className='texttitle'> Quantifiers: </p>
        <ol className='textfont'>
          <li className='textproof'>  <b> Universal Quantifier (∀) </b>: Means "for all". </li>
          <ul className='textfont'>
            <li className='textproof'> Ex. ∀∈S (for every element in S)</li>
          </ul>
          <li className='textproof'> <b> Existential Quantifier (∃) </b>: Means "there exists".</li>
          <ul className='textfont'>
            <li className='textproof'> Ex. ∃∈S (there is atleast one element in S).</li>
          </ul>
        </ol>
        <p className='texttitle'> Quantifier Statements:</p>
        <ol className='textfont'> 
          <li className='textproof'> "Every cow has a favorite radio station" uses ∀.</li> 
          <li className='textproof'> "There is a black horse" uses ∃.</li>
        </ol>
        <p className='texttitle'> Quantifier Order: </p>
        <ol className='textfont'>
          <li className='textproof'> ∀x∈R, ∃y∈R, x + y = 0 (true) since it says "For every real number x, there exist a real number y that makes x + y = 0." </li>
          <li className='textproof'> ∃x∈R, ∀y∈R, x + y = 0 (false) since it says "There exist a real number x that every real number y makes x + y = 0". </li>
        </ol>
        <p className='texttitle'> Negating Quantifiers: </p>
        <ol className='textfont'>
          <li className='textproof'> Negating a <b> ∀ </b> becomes a <b> ∃</b>.</li>
          <ul className='textfont'>
            <li className='textproof'> Ex. "Every cow has a favorite radio station" (∀x, P(x)) becomes "There exists a cow that doesn't have a favorite radio station" (∃x, ¬P(x)) when negated.</li>
          </ul>
          <li className='textproof'> Negating a <b> ∃ </b> becomes a <b> ∀</b>.</li>
          <ul className='textfont'>
            <li className='textproof'> Ex. "There is a black horse" (∃x, Q(x)) becomes "Every horse is non-black" (∀x, ¬Q(x)) when negated.</li>
          </ul>
          <li className='textproof'> Negating a <b> ∧ </b> becomes a <b> ∨</b>. </li>
          <ul className='textfont'>
            <li className='textproof'> Ex. "A pig and a cat" (P(x) ∧ C(x)) becomes "Not a pig or not a cat (or both)" (¬P(x) ∨ ¬C(x)) when negated.</li>
          </ul>
          <li className='textproof'> Negating a <b> ∨ </b> becomes a<b> ∧</b> . </li>
          <ul className='textfont'>
            <li className='textproof'> Ex. "A pig or a cat (or both)" (P(x) ∨ C(x)) becomes "Not a pig and not a cat" (¬P(x) ∧ ¬C(x)) when negated.</li>
          </ul>
        </ol>
        <p className='texttitle'> Implication, Contrapositive and Converse: </p>
        <ol className='textfont'>
          <li className='textproof'> An <b> implication </b> (if P, then Q) is denoted by <b> P ⇒ Q</b>.</li>
          <li className='textproof'> The <b> contrapositive </b> of P ⇒ Q is ¬Q ⇒ ¬P, and these are logically equivalent.</li>
          <li className='textproof'> The <b> converse </b> of P ⇒ Q is Q ⇒ P, which is not always true.</li>
        </ol>
        <p className='texttitle'> Example of a Implication:</p>
        <ol className='textfont'>
          <li className='textproof'> Example: If D(x) = "x is a dog" and A(x) = "x is an animal" </li>
          <ul className='textfont'>
            <li className='textproof'> D(x) ⇒ A(x) means "All dogs are animals" (True). </li>
            <li className='textproof'> A(x) ⇒ D(x) means "All animals are dogs" (False). </li>
          </ul>
        </ol>
        <p className='texttitle'> Logical Equivalence: </p>
        <ol className='textfont'>
          <li className='textproof'> If both an <b> implication </b> and its <b> converse </b> are true, P ⇔ Q (P is true <b> if and only if </b> Q is true). </li>
          <ul className='textfont'>
            <li className='textproof'> Example: "An integer is even <b> if and only if </b> its square is even." </li>
          </ul>
        </ol>
        <p className='texttitle'> Negating Implications: </p>
        <ol className='textfont'>
          <li className='textproof'> Negating <b> (P ⇒ Q) </b> becomes <b> P ∧ ¬Q </b>, meaning P is true but Q is false.</li>
          <ul className='textfont'>
            <li className='textproof'> Example: Negating "If x is a duck, then x likes peanut butter" results in "x is a duck and x does not like peanut butter".</li>
          </ul>
        </ol>
    </Page>
  )
}

export default Logic