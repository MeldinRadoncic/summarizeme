import {logo, appwizardpro} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img className="w-28 object-contain" src={logo} alt="sumz-logo" />

        <button className='black_btn'
        onClick={() => window.open('https://www.appwizardpro.com')}
        type='button'
        >
          <img
           src={appwizardpro}
            alt="App Wizard Pro Logo"
            className='h-8 w-8 rounded-full inline mr-2'
            />

          App Wizard Pro
          </button>  
              </nav>

              <h1 className='head_text'>
              Streamline Your Reading Experience with <br className='max-md:hidden'/>
                <span className='orange_gradient'>ChatGPT-4</span>

              </h1>

              <h2 className='desc'>
              Experience the power of SummarizeMe, an innovative tool designed to revolutionize your reading habits. Say goodbye to information overload and time-consuming article consumption.
              </h2>

    </header>
  )
}

export default Hero