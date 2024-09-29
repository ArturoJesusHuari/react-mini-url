import React, { useState } from 'react';
import axios from 'axios';

const LinkShortener = () => {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);  // Estado para manejar la copia

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setCopied(false);  // Reiniciar el estado de copia al enviar un nuevo enlace
        try {
            const response = await axios.post('https://mini-url-lac.vercel.app/', {
              destination: url , 
              headers: {
                'Content-Type': 'application/json',
              },
            });
            setShortenedUrl('https://mini-url-lac.vercel.app/'+response.data.response.source);
        } catch (err) {
            setError('Error al recortar el enlace. Intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(shortenedUrl)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Mostrar el estado de "copiado" temporalmente
            })
            .catch((err) => {
                console.error('Error al copiar el enlace:', err);
            });
    };

    return (
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm">
                <h1 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recortador de Links</h1>
                <form 
                    onSubmit={handleSubmit} 
                    className="w-full bg-white p-6 rounded-lg shadow-md"
                >
                    <label className='mx-auto mt-8 relative bg-white flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300'>
                        <input
                            type="url"
                            value={url}
                            onChange={handleInputChange}
                            placeholder="Ingresa el enlace aquí"
                            className="px-6 py-2 w-full text-black rounded-md flex-1 outline-none bg-white"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className={`text-sm xl:text-2x lg:text-2xl md:text-xl sm:text-md w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all ${
                                loading
                            } transition`}
                        >
                            {loading ? 'Generando...' : 'Generar'}
                        </button>
                    </label>
                </form>
                {shortenedUrl && (
                    <div className="mt-6 items-center justify-center gap-4">
                        <div className='w-full'>
                            <h2 className="mx-auto max-w-2xl text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Enlace Recortado</h2>
                        </div>
                        <a
                            href={shortenedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mx-2 text-sm"
                        >
                            {shortenedUrl}
                        </a>
                        <button 
                            onClick={handleCopyClick}
                            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 text-sm"
                        >
                            {copied ? 'Copiado!' : 'Copiar'}
                        </button>
                    </div>
                )}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default LinkShortener;