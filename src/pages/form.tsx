import DifficultiesAndObjectivesForm from '../components/Forms/DifficultiesAndObjectivesForm';
import FamilyAndYouForm from '../components/Forms/FamilyAndYouForm';
import PersonalDetailForm from '../components/Forms/PersonalDetailForm';
import Title from '../components/Title';
const Form = () => {
  return (
    <div className="text-center">
      <Title text="APOIO PARA CONHECER VOCÊ MELHOR" />
      <p className="text-justify">
        O propósito deste questionário é obter algumas informações sobre seu passado que possam nos ajudar a
        entender o contexto mais amplo de sua situação atual. Teremos oportunidade de discutir as suas
        dificuldades em detalhes, mas poderemos não ter tempo para discutir todos os aspectos de sua história
        e momento de vida atual. Este formulário lhe dá a oportunidade de nos fornecer um quadro mais completo
        e de fazer isso no seu próprio ritmo. Algumas questões são bem factuais, enquanto que outras têm uma
        natureza mais subjetiva. Se você achar difícil alguma parte do formulário, por favor, deixe em branco
        e poderemos discutir na sua entrevista. Enquanto isso, se você tiver algum problema em preencher
        alguma das seções, por favor, não hesite em nos contatar. Todas as informações que você fornecer neste
        formulário são confidenciais.
      </p>

      <PersonalDetailForm />
      <DifficultiesAndObjectivesForm />
      <FamilyAndYouForm />
    </div>
  );
};

export default Form;
