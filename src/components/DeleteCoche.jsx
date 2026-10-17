
import React, { Component } from 'react'

export default class DeleteCoche extends Component {
    
    confirmacionDelete = (idcoche) => {
        this.props.confirmacionDelete(idcoche);
    }

    render() {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 px-4 py-6 backdrop-blur-sm">

                <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

                    {/* Cabecera */}
                    <div className="flex flex-col items-center px-6 pt-8 pb-5 text-center">

                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                            <svg
                                className="h-9 w-9 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M12 9v4m0 4h.01M10.3 3.9 2.9 17.1A2 2 0 0 0 4.6 20h14.8a2 2 0 0 0 1.7-2.9L13.7 3.9a2 2 0 0 0-3.4 0Z"
                                />
                            </svg>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            ¿Eliminar este coche?
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            ¿Estás seguro de que quieres eliminar este vehículo?
                            Esta acción podría no poder deshacerse.
                        </p>
                    </div>

                    {/* Información del coche */}
                    <div className="mx-6 mb-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Vehículo seleccionado
                        </p>

                        <div className="mt-2 flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm ring-1 ring-gray-200">
                                <svg
                                    className="h-6 w-6"
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

                            <div className="min-w-0">
                                <p className="break-words font-bold text-gray-900">
                                    {this.props.coche.marca}
                                </p>
                                <p className="break-words text-sm text-gray-500">
                                    {this.props.coche.modelo}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botones de confirmación */}
                    <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50 px-6 py-5 sm:flex-row sm:justify-end">

                        <button
                            onClick={() => this.confirmacionDelete(null)}
                            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
                        >
                            Cancelar
                        </button>

                        <button
                            onClick={() => this.confirmacionDelete(this.props.coche.idCoche)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 7h12m-10 0 1 13h6l1-13M9 7V4h6v3"
                                />
                            </svg>
                            Eliminar coche
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}
