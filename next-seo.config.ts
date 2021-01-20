const title =
    'Doutor Multas'
const description = 'ESPECIALISTA EM DEFESAS E RECURSOS DE MULTAS DE TRÂNSITO.'

const SEO = {
  title,
  description,
  canonical: 'https://doutormultas.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://doutormultas.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://doutormultas.vercel.app/DoutorMultas.png',
        alt: title,
        width: 500,
        height: 500
      }
    ]
  }
}

export default SEO
