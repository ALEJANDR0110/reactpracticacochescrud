import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches'
import cargando from '../assets/images/cargando.gif'
import DeleteCoche from './DeleteCoche';
import { NavLink } from 'react-router-dom';

export default class HomeComponent extends Component {
    service = new ServiceCoches();

    state = {
        listaCoches: [],
        status: false,
        cocheDelt: null
    }

    loadCoches = () => {
        this.service.getCoches().then(result => {
            this.setState({
                listaCoches: result,
                status: true
                
            })
        })
    }

    deleteCoche = (coche) => {
        this.setState({
            cocheDelt: coche
        })
    }

    confirmacionDelete = (idcoche) => {
        if(idcoche) {
            this.service.deleteCoches(idcoche).then(result => {
                this.setState({
                    cocheDelt: null,
                })
                this.loadCoches()
            })
        }else {
            this.setState({
                cocheDelt: null
            })
        }
    }

    componentDidMount = () => {
        this.loadCoches();
    }
    
render() {
    if(this.state.status) {
        return (
            <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    {/* Cabecera */}
                    <div className="mb-8">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                            Panel de administración
                        </p>

                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Gestión de coches
                        </h1>

                        <p className="mt-3 text-gray-500">
                            Consulta, edita y administra los vehículos registrados.
                        </p>

                        <div className="mt-5 h-1 w-20 rounded-full bg-blue-600"></div>
                    </div>

                    {/* Contador */}
                    <div className="mb-6 flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div>
                            <p className="text-sm font-medium text-gray-500">
                                Total de vehículos
                            </p>
                            <p className="mt-1 text-3xl font-bold text-gray-900">
                                {this.state.listaCoches.length}
                            </p>
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <svg
                                className="h-8 w-8"
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
                    </div>

                    {/* Confirmación de eliminación */}
                    {
                        this.state.cocheDelt &&
                        <DeleteCoche
                            coche={this.state.cocheDelt}
                            confirmacionDelete={this.confirmacionDelete}
                        />
                    }

                    {/* Tabla de coches */}
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                        <div className="border-b border-gray-100 px-6 py-5">
                            <h2 className="text-lg font-bold text-gray-900">
                                Vehículos registrados
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">
                                Información y acciones disponibles para cada coche.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="bg-gray-900 text-xs uppercase tracking-wider text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">
                                            Marca
                                        </th>
                                        <th className="px-6 py-4 font-semibold">
                                            Modelo
                                        </th>
                                        <th className="px-6 py-4 font-semibold">
                                            Conductor
                                        </th>
                                        <th className="px-6 py-4 text-center font-semibold">
                                            Imagen
                                        </th>
                                        <th className="px-6 py-4 text-center font-semibold">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100">
                                    {
                                        this.state.listaCoches.map((coche, index) => {
                                            return(
                                                <tr
                                                    key={index}
                                                    className="odd:bg-white even:bg-gray-50 transition-colors duration-200 hover:bg-blue-50"
                                                >
                                                    <td className="whitespace-nowrap px-6 py-5">
                                                        <span className="font-bold text-gray-900">
                                                            {coche.marca}
                                                        </span>
                                                    </td>

                                                    <td className="whitespace-nowrap px-6 py-5">
                                                        <span className="inline-flex rounded-lg bg-blue-50 px-3 py-1.5 font-medium text-blue-700">
                                                            {coche.modelo}
                                                        </span>
                                                    </td>

                                                    <td className="whitespace-nowrap px-6 py-5">
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-600">
                                                                {coche.conductor ? coche.conductor.charAt(0).toUpperCase() : '?'}
                                                            </div>

                                                            <span className="font-medium text-gray-700">
                                                                {coche.conductor}
                                                            </span>
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        <div className="flex justify-center">
                                                            <img
                                                                src={coche.imagen}
                                                                alt={coche.marca + ' ' + coche.modelo}
                                                                className="h-20 w-32 rounded-xl border border-gray-200 bg-white object-contain p-1 transition-transform duration-200 hover:scale-110"
                                                            />
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-5">
                                                        <div className="flex flex-wrap items-center justify-center gap-2">
                                                            <NavLink
                                                                to={"/updateCoche/" + coche.idCoche}
                                                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
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
                                                                        d="m16.5 3.5 4 4L9 19l-5 1 1-5L16.5 3.5Z"
                                                                    />
                                                                </svg>
                                                                Editar
                                                            </NavLink>

                                                            <button
                                                                onClick={() => this.deleteCoche(coche)}
                                                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 font-semibold text-red-700 transition hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-200"
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
                                                                Eliminar
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        return(
            <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50">
                <img
                    src={cargando}
                    alt="Cargando coches"
                    className="h-20 w-20 object-contain"
                />
                <p className="animate-pulse text-sm font-medium text-gray-500">
                    Cargando vehículos...
                </p>
            </div>
        )
    }
}

}
