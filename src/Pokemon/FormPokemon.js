import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormField from './../Core/FormField'

class FormPokemon extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onAppendFile = this.onAppendFile.bind(this);
        
        this.state = {
            nome: '',
            numero: 0,
            descricao: '',
            tipo: '',
            imagem: null
        };
    }

    onChange(event) {
        const property = event.target.name;
        this.setState({ [property]: event.target.value });
        //alert(this.state.numero);
    }

    onAppendFile(event) {
        this.setState({ imagem: event.target.files[0] });
    }

    onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        this.props.submit(formData);
    }

    render() {
        const tipos = this.props.tipos.map(t => ({id: t.id, label: t.nome}));
        const linkCancelar = this.props.linkCancelar;
        return (
            <form onSubmit={this.onSubmit} >
                <FormField name="numero" label="Número" type="number" onChange={this.onChange} />
                <FormField name="nome" label="Nome" type="text" onChange={this.onChange} />
                <FormField name="descricao" label="Descrição" type="textarea" onChange={this.onChange} />
                <FormField name="tipo" label="Tipo" type="select" onChange={this.onChange} options={tipos} />
                <FormField name="imagem" label="Imagem" type="file" onChange={this.onAppendFile} />
                <div className="row">
                    <div className="form-group col-lg-2">
                        <button type="submit" className="btn btn-block btn-primary">Enviar</button>
                    </div>
                    {linkCancelar && 
                        <div className="form-group col-lg-2">
                            <Link className="btn btn-block btn-default" to={linkCancelar}>Cancelar</Link>
                        </div>
                    }
                </div>
            </form>
        );
    }

}

FormPokemon.propTypes = {
    tipos: PropTypes.array.isRequired,
    submit: PropTypes.func.isRequired,
    linkCancelar: PropTypes.string
}

export default FormPokemon;