
import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches';
import { Navigate } from 'react-router-dom';

export default class CreateCoche extends Component {
    service = new ServiceCoches();

    cajaIdCoche = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImg = React.createRef();

    state = {
        mensaje: "",
        status: false
    }

    insertCoche = (event) => {
        event.preventDefault();

        let coche = {
            idCoche: parseInt(this.cajaIdCoche.current.value),
            marca: this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: this.cajaImg.current.value
        }

        this.service.insertCoche(coche)
            .then(result => {
                this.setState({
                    status: true
                })
            })
    }

    render() {
        if(this.state.status === true) {
            return(<Navigate to='/'/>)
        } else {
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
                                        d="M5 17h14l1-6-2-5H6l-2 5 1 6Zm0 0v2m14-2v2M4 11h16M7 14h.01M17 14h.01"
                                    />
                                </svg>
                            </div>

                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Crear coche
                            </h1>

                            <p className="mt-3 text-base text-gray-500">
                                Introduce los datos del nuevo vehículo.
                            </p>
                        </div>

                        {/* Formulario */}
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">

                            <div className="border-b border-gray-100 bg-gray-50 px-6 py-5 sm:px-8">
                                <h2 className="text-lg font-bold text-gray-800">
                                    Información del vehículo
                                </h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    Completa los siguientes campos.
                                </p>
                            </div>

                            <form className="space-y-6 p-6 sm:p-8">

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        ID del coche
                                    </label>
                                    <input
                                        type="number"
                                        ref={this.cajaIdCoche}
                                        placeholder="Ej. 101"
                                        className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Marca
                                        </label>
                                        <input
                                            type="text"
                                            ref={this.cajaMarca}
                                            placeholder="Ej. Toyota"
                                            className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Modelo
                                        </label>
                                        <input
                                            type="text"
                                            ref={this.cajaModelo}
                                            placeholder="Ej. Corolla"
                                            className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                        />
                                    </div>

                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Conductor
                                    </label>
                                    <input
                                        type="text"
                                        ref={this.cajaConductor}
                                        placeholder="Nombre del conductor"
                                        className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        URL de la imagen
                                    </label>
                                    <input
                                        type="text"
                                        ref={this.cajaImg}
                                        placeholder="https://ejemplo.com/coche.jpg"
                                        className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                    />
                                    <p className="mt-2 text-xs text-gray-500">
                                        Introduce la dirección de la imagen del vehículo.
                                    </p>
                                </div>

                                <div className="border-t border-gray-100 pt-6">
                                    <button
                                        type="button"
                                        onClick={this.insertCoche}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition duration-200 hover:bg-blue-700 hover:shadow-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99] sm:w-auto sm:min-w-40"
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
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                        Crear coche
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
        }
    }
}
