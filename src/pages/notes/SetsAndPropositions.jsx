import Page from '../../components/Page';
import Conjunction from "../../images/notes/conjunction.webp"
import Disjunction from "../../images/notes/disjunction.webp"
import Negation from "../../images/notes/negation.webp"
function SetsAndPropositions() {
  return (
    <Page title="Sets and Propositions">
          <h1> Sets and Propositions </h1>

          <p className='texttitle'> <b> Sets and Set Notation: </b> </p>
          <ol className='textfont'>
            <li className='textproof'> A <b> set </b> is a collection of well defined and distinct object, called elements. </li>
              <ul>
                <li className='textproof'> Ex. {"{a,b,c}"} is a set that contains the elements a, b and c. </li>
              </ul>
                <li className='textproof'><b> Empty Set </b> is denoted as ∅. *∅ is always a subset of any sets.</li>
                <ul>
                  <li className='textproof'> Ex. ∅ ⊆ A, ∅ ⊆ A x B, ∅ ⊆ A ∪ B. </li>
                </ul>
            <li className='textproof'> <b> Set Builder Notation </b> comes in the format of {"{x: x > 2}"} where x stands for "all x in a certain set" and the x {'>'} 2 is the condition of the set.</li>
          </ol>


          <p className='texttitle'> <b> Set Operations: </b></p>
          <ol className='textfont'>
            <li className='textproof'> The <b> union </b> of sets S and T would look like S ∪ T. This means the set belongs to either S <b> OR </b> T or it can belong to both sets as the union is <b> inclusive </b>.</li>
            <ul> 
              <li className='textproof'>
                S ∪ T = {"{x: x∈S or x∈T}"}
              </li>
            </ul>
            <li  className='textproof'> The <b> intersection </b> of sets S and T would look like S ∩ T. This means the set belongs <b> exclusively </b> to S <b> AND </b> T.</li>
            <ul> 
              <li className='textproof'>
                S ∩ T = {"{x: x∈S and x∈T}"}
              </li>
            </ul>
            <li className='textproof'> The <b> difference </b> of sets S and T would look like S\T. This means that everything in S <b> BUT</b> not in T.</li>
            <ul> 
              <li className='textproof'>
                S\T = {"{x: x∈S but x∉T}"}
              </li>
            </ul>
            <li className='textproof'> The <b> complement </b> of sets S would look like Aᶜ or A'. This means that everything in U, where U is the universe of discourse, but not in A.</li>
            <ul> 
              <li className='textproof'>
                Aᶜ = {"{x∈U: x∉A}"}
              </li>
            </ul>
          </ol>


          <p className='texttitle'> <b> Cartesian Product: </b></p>
          <ol className='textfont'>
            <li className='textproof'> The <b> Cartesian Product </b> of two sets <b> A x B </b> is the set of all ordered pair (a,b), where a∈A and b∈B.</li>
            <ul>
              <li className='textproof'> Ex. If S={"{1,2}"} and T={"{a,b}"}, then S x T = {"{(1,a), (1,b), (2,a), (2,b)}"} </li>
            </ul>
          </ol>


          <p className='texttitle'> <b> Set Relations: </b></p>
          <ol className='textfont'>
            <li className='textproof'> A <b> subset </b> can be defined as having two sets and one of the sets has every element the other one has as well.  </li>
            <ul> 
              <li className='textproof'> Ex. Let S and T be two sets where S={"{1,2}"} and T={"{1,2,3}"}. S ⊆ T because every element in S is also present in T but T ⊄ S since S doesn't have every element that is in T. {"{1,2}"} ⊆ {"{1,2,3}"}. {"{1,2,3}"} ⊄ {"{1,2}"}. </li>
            </ul>
            <li className='textproof'> If A ⊆ B and B ⊆ A are both true then A = B. </li>
            <ul>
              <li className='textproof'> Ex. A = {"{1,2,3}"} and B = {"{1,2,3}"} then A ⊆ B and B ⊆ A. {"{1,2,3}"} ⊆ {"{1,2,3}"}. Hence A = B. </li>
            </ul>
          </ol>


          <p className='texttitle'> <b> Propositional Logic: </b></p>
          <ol className='textfont'>
            <li className='textproof'> A <b> proposition </b> is a statement that is either true or false. </li>
            <ul>
              <li className='textproof'> Ex. "It is raining right now" (false). "2 + 2 = 4" (true).</li>
            </ul>
            <li className='textproof'> A <b> predicate </b> is a statement that contains a variable that is not necessarily true of false until that variable is specified.</li>
            <ul>
              <li className='textproof'> Ex. P(x) where P(x) is "x is a prime number. </li>
              <li className='textproof'> F(x) where F(x) is "x has blue hair". </li>
            </ul>
          </ol>


          <p className='texttitle'> <b> Logical Operators </b></p>
          <ol className='textfont'> 
            <li className='textproof'> <b> Conjuction (AND) </b> - Given two predicates P, Q, P ∧ Q becomes true only if both P and Q are true predicates. </li>
            <li className='textproof'> <b> Disjunction (OR) </b> - Given two predicates P, Q, P ∨ Q becomes true if one or both P or Q is true. </li>
            <li className='textproof'> <b> Negation (NOT) </b> - Given a predicate P, if P is true then ¬P would be false. </li>
          </ol>


          <p className='texttitle'> <b> Truth Table: </b></p>
          <ol className='textfont'>
          <p className='textproof'> Properties of Conjunction: </p>
          <img className='picture' src={Conjunction} alt='Conjunction truth table' loading='lazy' />
          <p className='textproof'> Properties of Disjunction:</p> 
          <img className='picture' src={Disjunction} alt='Disjunction truth table' loading='lazy' />
          <p className='textproof' > Properties of Negation: </p>
          <img className='picture' src={Negation} alt='Negation truth table' loading='lazy' />
          </ol>

          <p className='texttitle'> <b> Logical Equivalance: </b></p>
          <ol className='textfont'>
            <li className='textproof'> <b> De Morgan's Law </b> specifies that two statements are logically equivalent if their truth table are identical. </li>
            <ul>
              <li className='textproof'> Ex. ¬(P(x) ∧ Q(x)) = ¬P(x) ∨  ¬Q(x). </li>
            </ul>
          </ol>
    </Page>

  )
}

export default SetsAndPropositions