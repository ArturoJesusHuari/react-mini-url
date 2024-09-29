function Header () {
  return(
    <footer className="absolute bottom-0 left-0 w-full bg-gray-950 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
          
          <div className="md:mb-0 text-left">
              <h2 className="text-sm xl:text-xl lg:text-lg md:text-md font-bold my-2">Mini-URL</h2>
              <p className="text-sm xl:text-lg lg:text-md md:text-sm">Recorta tus enlaces fácilmente con Mini-URL. Simplifica la manera en que compartes enlaces en cualquier plataforma.</p>
          </div>

          <div className="md:mt-0">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729V22.27C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.271V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.748a2.065 2.065 0 01-2.06-2.07c0-1.14.92-2.07 2.06-2.07 1.13 0 2.06.93 2.06 2.07 0 1.14-.93 2.07-2.06 2.07zm15.09 12.704h-3.56V14.89c0-1.33-.48-2.24-1.68-2.24-.92 0-1.47.627-1.71 1.233-.088.212-.11.506-.11.802v5.768h-3.56V9h3.56v1.565h.04c.5-.799 1.37-1.947 3.33-1.947 2.43 0 4.25 1.59 4.25 5.017v6.818h-.003z"/>
                  </svg>
              </a>
          </div>
      </div>

      <div className="text-sm xl:text-lg lg:text-md md:text-sm text-center">
          <p>&copy; 2024 Mini-URL. Todos los derechos reservados.</p>
      </div>
  </footer>
  )
}

export default Header;