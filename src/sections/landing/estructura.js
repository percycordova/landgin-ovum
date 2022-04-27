import React, {useEffect, useRef, useState} from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
import {gsap, Power2} from 'gsap'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import {Navigation, Pagination} from 'swiper'
import Link from 'next/link'
import useOnScreen from '../../hooks/useOnScreen'

/* import Button from '../../components/buttons/Button' */

const Estructura = ({idiomas}) => {
	const {Estructura} = idiomas
	const {
		titulo,
		sesiones,
		conferencias,
		expoferia,
		investigacion,
		salas,
		turismo
	} = Estructura
	const RefObservador = useRef(null)
	const RefTitulo = useRef(null)
	const {isNearScreen} = useOnScreen({
		externalRef: RefObservador,
		distance: '-100px',
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
		const items = document.querySelectorAll('.item')
		if (isNearScreen && isMounted) {
			timeLine
				.from(RefTitulo.current, {
					y: -50,
					x: 0,
					stagger: 0.2
				})
				.from(
					items,
					{
						y: 0,
						x: 0,
						stagger: 0.2
					},
					'-=0.8'
				)
		}
	}, [isNearScreen])

	const data = [
		{
			id: 1,
			img: '/estructura-6.png',
			title: sesiones.titulo,
			text: sesiones.descripcion,
			typeImg: 'pollo',
			url: '/estructura-sesiones'
		},
		{
			id: 2,
			img: '/estructura-1.png',
			title: conferencias.titulo,
			text: conferencias.descripcion,
			typeImg: 'ala',
			url: '/estructura-conferencias'
		},
		{
			id: 3,
			img: '/estructura-2.png',
			title: expoferia.titulo,
			text: expoferia.descripcion,
			typeImg: 'gallina',
			url: '/estructura-expoferia'
		},
		{
			id: 4,
			img: '/estructura-3.png',
			title: investigacion.titulo,
			text: investigacion.descripcion,
			typeImg: 'gallina',
			url: '/estructura-investigacion'
		},
		{
			id: 5,
			img: '/estructura-4.png',
			title: salas.titulo,
			text: salas.descripcion,
			typeImg: 'pollo-black',
			url: '/estructura-salas'
		},
		{
			id: 6,
			img: '/estructura-5.png',
			title: turismo.titulo,
			text: turismo.descripcion,
			typeImg: 'ala-black',
			url: '/estructura-turismo'
		}
	]
	const textColor = (id) => {
		if (id === 1) {
			return 'text-white'
		} else if (id === 2) {
			return 'text-white'
		} else if (id === 3) {
			return 'text-black'
		} else if (id === 4) {
			return 'text-white'
		} else if (id === 5) {
			return 'text-black'
		} else if (id === 6) {
			return 'text-black'
		}
	}

	const bgColor = (id) => {
		if (id === 1) {
			return 'bg-green-500'
		} else if (id === 2) {
			return 'bg-primary-850'
		} else if (id === 3) {
			return 'bg-green-400'
		} else if (id === 4) {
			return 'bg-blue-500'
		} else if (id === 5) {
			return 'bg-yellow-800'
		} else if (id === 6) {
			return 'bg-yellow-300'
		}
	}
	const [isMounted, setMount] = useState(false)
	useEffect(() => {
		setMount(true)
	}, [])
	return (
		<section
			className='relative overflow-x-hidden bg-white flex flex-col justify-center items-center py-14 border'
			ref={RefObservador}
			id='estructura'
		>
			<img
				src='/estructura-rayas.png'
				alt=''
				className='absolute -right-15 bottom-30 '
			/>
			<div className='w-full md:max-w-256 mt-5 max-w-7xl mx-auto p-8 lg:p-0'>
				<h6
					ref={RefTitulo}
					className='text-3xl lg:text-3.5xl text-center font-bold mb-8 text-blue-500'
				>
					{titulo}
				</h6>
				<div className='hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-4'>
					{isMounted &&
						data.map((item, index) => (
							<div
								key={item.id}
								className=' mx-auto max-w-sm rounded-2xl overflow-hidden item'
							>
								<img
									className='w-full object-cover'
									src={item.img}
									alt='Sunset in the mountains'
								/>
								<div
									className={`relative px-6 pt-4 pb-10 ${bgColor(
										item.id
									)} ${textColor(item.id)} rounded-b-2xl`}
								>
									<div className=' text-xl mb-2'>{item.title}</div>
									<p className='font-light text-sm lg:text-base  h-40 text-justify'>
										<span className='mb-3 block'>{item.text}</span>

										{index === 2 && (
											<a
												className='text-black  border-b border-black'
												href='/pdfs/MANUAL-DEL-EXPOSITOR-OVUM-2022-21-MAR.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												Descargar manual del expositor.
											</a>
										)}
									</p>

									{item.typeImg === 'pollo' && (
										<img
											src='/pollo.png'
											className='absolute -bottom-7 right-0'
											alt=''
										/>
									)}
									{item.typeImg === 'pollo-black' && (
										<img
											src='/pollo-black.png'
											className='absolute bottom-0 right-0'
											alt=''
										/>
									)}
									{item.typeImg === 'ala' && (
										<img
											src='/ala.png'
											className='absolute -bottom-2 -right-6'
											alt=''
										/>
									)}
									{item.typeImg === 'ala-black' && (
										<img
											src='/ala-black.png'
											className='absolute bottom-0 right-0'
											alt=''
										/>
									)}
									{item.typeImg === 'gallina' && (
										<img
											src='/gallina.png'
											className='absolute -bottom-2 right-2'
											alt=''
										/>
									)}
								</div>
							</div>
						))}
				</div>
				{/* slider en mobile */}

				<div className='lg:hidden'>
					{isMounted && (
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							navigation={true}
							pagination={{
								clickable: true
							}}
							breakpoints={{
								640: {
									slidesPerView: 1,
									spaceBetween: 20
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 20
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 30
								}
							}}
							modules={[Navigation, Pagination]}
							className='mySwiper'
						>
							{data.map((item) => (
								<SwiperSlide key={item.id}>
									<div className='mx-auto max-w-sm rounded-2xl overflow-hidden pb-10'>
										<img
											className='w-full'
											src={item.img}
											alt={item.descripcion}
										/>
										<div
											className={`px-6 pt-4 pb-10 ${bgColor(
												item.id
											)} ${textColor(item.id)} rounded-b-2xl`}
										>
											<div className='font-bold text-xl mb-2'>{item.title}</div>
											<p className='font-light text-sm lg:text-base text-justify mb-5 h-32'>
												{item.text}
											</p>
											{index === 2 && (
												<a
													className='text-black  border-b border-black'
													href='/pdfs/MANUAL-DEL-EXPOSITOR-OVUM-2022-21-MAR.pdf'
													target='_blank'
													rel='noopener noreferrer'
												>
													Descargar manual del expositor.
												</a>
											)}
											{/* <span className="text-white font-bold border-b border-white ">
                        <Link
                          href={item.url}

                        >
                          Ver más
                        </Link>
                      </span> */}
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					)}
				</div>
				{/* fin slider en mobile */}
			</div>
		</section>
	)
}

export default Estructura
