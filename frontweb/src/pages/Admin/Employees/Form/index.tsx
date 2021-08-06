import './styles.css';

const Form = () => {

  const handleCancel = () => {
    // to do
  };

  return (
    <div className="employee-crud-container">
      <div className="base-card employee-crud-form-card">
        <h1 className="employee-crud-form-title">INFORME OS DADOS</h1>

        <form>
          <div className="row employee-crud-inputs-container">
            <div className="col employee-crud-inputs-left-container">

              <div className="margin-bottom-30">
                <input type="text" 
                  className="form-control base-input is-invalid"
                />
                <div className="invalid-feedback d-block">
                  Mensagem de erro
                </div>
              </div>

              <div className="margin-bottom-30">
                <input type="text" 
                  className="form-control base-input"
                />
                <div className="invalid-feedback d-block">
                  
                </div>
              </div>

            </div>
          </div>
          <div className="employee-crud-buttons-container">
            <button
              className="btn btn-outline-danger employee-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary employee-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
