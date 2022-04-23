import React, {useEffect, useRef} from 'react'
import {gsap, Power2} from 'gsap'
import useOnScreen from '../../hooks/useOnScreen'

const Banner = ({idiomas}) => {
	const bannerRef = useRef(null)
	const refTituloFecha = useRef(null)
	const refTituloLugar = useRef(null)
	const refImgAsociacion = useRef(null)
	const refImgAnavih = useRef(null)
	const refImgOvum = useRef(null)
	const refButton = useRef(null)
	const {isNearScreen} = useOnScreen({
		externalRef: bannerRef,
		distance: '-300px',
		once: false
	})

	const timeLine = gsap.timeline({
		defaults: {
			duration: 1,
			ease: Power2.easeOut,
			opacity: 0
		}
	})
	useEffect(() => {
		// si tengo varias etiuetas y aplico un queryselectoAll tengo que póner stagger para que se haga una animacion en cadena
		//-=0.3 para decir que la animacion comience antes
		if (isNearScreen) {
			timeLine
				.from(refImgOvum.current, {
					y: -50,
					x: 0,
					stagger: 0.3
				})
				.from(
					refImgAnavih.current,
					{
						y: 0,
						x: 50,
						stagger: 0.3
					},
					'-=1'
				)
				.from(
					refImgAsociacion.current,
					{
						y: 0,
						x: -50,
						stagger: 0.3
					},
					'-=1'
				)
				.from(
					refTituloFecha.current,
					{
						y: 0,
						x: 50,
						stagger: 0.3
					},
					'-=1'
				)
				.from(
					refTituloLugar.current,
					{
						y: 0,
						x: -50,
						stagger: 0.3
					},
					'-=1 '
				)
				.from(
					refButton.current,
					{
						y: 350,
						x: -100,
						stagger: 0.3
					},
					'-=1.4 '
				)
		}
	}, [isNearScreen])
	return (
		<div className='  relative z-10 py-2 text-white ' ref={bannerRef}>
			{/* logos  */}
			<div className='logo bg-white md:flex-row flex flex-col md:justify-center  items-center mt-3 mb-9 relative'>
				<div className='hidden sm:w-full md:flex gap-x-26 items-start justify-center mb-5'>
					<img
						src='/banner__logo-asociacion.svg'
						className='w-40 h-17 object-cover lg:w-51 z-30 lg:mt-10'
						ref={refImgAsociacion}
					/>
					<img
						src='/banner__logo-ovum.svg'
						className=' lg:h-90 w-55 object-cover
            z-30 '
						ref={refImgOvum}
					/>
					<img
						src='/banner__logo-avianca.svg'
						className='w:40 lg:w-47 h-30 object-fill z-30 lg:mt-10'
						ref={refImgAnavih}
					/>
				</div>
				<img
					src='/logo-mobile.png'
					className='z-30 relative  md:hidden -mt-4'
				/>
				<div className=' md:absolute md:-bottom-6 -mt-7  flex gap-x-2 md:gap-x-6  md:mt-0 justify-center items-start'>
					<img
						src='/banner__logos__mobile.svg'
						alt=''
						className='md:hidden z-30 w-80'
					/>
				</div>
			</div>
			{/* fin logos */}

			<div className=' pp h-120 lg:h-140 relative w-full  lg:-mt-64 '>
				<img
					src='/fondo-mobile-nb-top.png'
					className='-mt-20 absolute pp2  lg:hidden '
					alt=''
				/>
				{/* Desktop */}
				<img
					src='/fondo-nb-top.png'
					className='absolute hidden lg:block fondo-nb-top-desktop -mt-26 z-20 '
					alt=''
				/>
				<img
					src='/lineas-mobile.svg'
					alt=''
					className='absolute -top-10   lineas w-full lg:w-screen lg:hidden'
				/>
				<img
					src='/banner__lineas-portada.svg'
					alt=''
					className='absolute -bottom-64
           hidden lg:block w-full h-120 2xl:h-auto 2xl:-bottom-96'
				/>
				<div className='absolute bottom-0 h-20 lg:hidden bg-white w-full'></div>
				<div className='pt-36 pb-30 lg:pb-44 xl:pb-52 relative z-50  lg:pt-72'>
					<div>
						<p
							ref={refTituloFecha}
							className='font-bold text-2.5xl md:text-4.5xl  z-20 mt-4 text-center banner__fecha'
						>
							{idiomas.Banner.value}
						</p>
						<p
							ref={refTituloLugar}
							className='text-center z-20 text-base md:text-2xl relative  banner__san-pedro mt-2'
						>
							San Pedro Sula, Honduras
						</p>
					</div>

					<div className='flex justify-center  z-30 mt-12 lg:absolute lg:bottom-26 btn-banner  w-64 mx-auto  '>
						<a
							className={`bg-secondary-600 text-white pt-3 pb-4 flex justify-center
                       items-center w-full text-lg md:text-xl  rounded-3xl 
                       hover:opacity-80 transition-all duration-300 focus:outline-none 
                       focus:shadow-outline cursor-pointer mb-4`}
							href='/pdfs/PATROCINIOS-OVUM-2022.pdf'
							// href='#consultanos'
							ref={refButton}
							target='_blank'
							rel='noopener'
						>
							{idiomas.Banner.button}
						</a>
					</div>
					{/* <img
            src="/fondo-blanco-bottom.png"
            className="absolute bottom-0  w-full    z-0 "
            alt=""
          /> */}
				</div>
			</div>
		</div>
	)
}

export default Banner
