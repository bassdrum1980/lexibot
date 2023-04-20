const ActivateForm = ({ handleSubmit, firstName }) => (
  <>
    <h1>Account Activation for {firstName}</h1>
    <form onSubmit={handleSubmit}>
      <button type="submit">Activate Account</button>
    </form>
  </>
);

ActivateForm.displayName = 'Activate Account Form';

export default ActivateForm;
