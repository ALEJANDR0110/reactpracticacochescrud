import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches'
import cargando from '../assets/images/cargando.gif'
import { Navigate } from 'react-router-dom';

export default class UpdateCoche extends Component {
    service = new ServiceCoches();

    cajaIdCoche = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        coche: null,
        info: false,
        status: false
    }

    loadCoche = () => {
        this.service.getCoche(this.props.idcoche).then(result => {
            this.setState({
                coche: result,
                info: true
            })
        })
    }

    updateCoche = (event) => {
        event.preventDefault();

        let newCoche = {
            idCoche: this.cajaIdCoche.current.value,
            marca: this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: this.cajaImagen.current.value
        }

        this.service.updateCoche(newCoche).then(result => {
            this.setState({
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadCoche();
    }

    
render() {
    if(this.state.info === true) {
        return (
            <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">

                    {/* Cabecera */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                            <svg
                                className="h-9 w-9"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="m16.5 3.5 4 4L9 19l-5 1 1-5L16.5 3.5Z"
                                />
                            </svg>
                        </div>

                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                            Gestión de vehículos
                        </p>

                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Actualizar coche
                        </h1>

                        <p className="mt-3 text-base text-gray-500">
                            Modifica los datos del vehículo seleccionado.
                        </p>
                    </div>

                    {/* Redirección tras actualizar */}
                    {
                        this.state.status === true &&
                        (<Navigate to="/" />)
                    }

                    {/* Formulario */}
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">

                        <div className="border-b border-gray-100 bg-gray-50 px-6 py-5 sm:px-8">
                            <h2 className="text-lg font-bold text-gray-800">
                                Información del vehículo
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Revisa y modifica los siguientes campos.
                            </p>
                        </div>

                        <form className="space-y-6 p-6 sm:p-8">

                            {/* ID */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    ID del coche
                                </label>

                                <input
                                    type="number"
                                    value={this.state.coche.idCoche}
                                    ref={this.cajaIdCoche}
                                    className="block w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-gray-500 outline-none"
                                    disabled
                                />

                                <p className="mt-2 text-xs text-gray-400">
                                    El identificador no se puede modificar.
                                </p>
                            </div>

                            {/* Marca y modelo */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Marca
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue={this.state.coche.marca}
                                        ref={this.cajaMarca}
                                        className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Modelo
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue={this.state.coche.modelo}
                                        ref={this.cajaModelo}
                                        className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                            </div>

                            {/* Conductor */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Conductor
                                </label>

                                <input
                                    type="text"
                                    defaultValue={this.state.coche.conductor}
                                    ref={this.cajaConductor}
                                    className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                />
                            </div>

                            {/* Imagen */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    URL de la imagen
                                </label>

                                <input
                                    type="text"
                                    defaultValue={this.state.coche.imagen}
                                    ref={this.cajaImagen}
                                    className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                />

                                <p className="mt-2 text-xs text-gray-500">
                                    Introduce la dirección de la imagen del vehículo.
                                </p>
                            </div>

                            {/* Botón */}
                            <div className="border-t border-gray-100 pt-6">
                                <button
                                    onClick={this.updateCoche}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition duration-200 hover:bg-blue-700 hover:shadow-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99] sm:w-auto sm:min-w-48"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    Guardar cambios
                                </button>
                            </div>

                        </form>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-400">
                        Gestión de vehículos
                    </p>

                </div>
            </div>
        )
    } else {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50">
                <img
                    src={cargando}
                    alt="Cargando"
                    className="h-20 w-20 object-contain"
                />

                <p className="animate-pulse text-sm font-medium text-gray-500">
                    Cargando información del vehículo...
                </p>
            </div>
        )
    }
}

}
