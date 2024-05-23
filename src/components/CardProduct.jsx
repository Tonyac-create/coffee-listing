import React, { useState, useEffect } from 'react'

export default function CardProduct({ onlyAvailableCoffees }) {
    const [coffees, setCoffees] = useState([])

    useEffect(() => {

        fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setCoffees(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className=' flex flex-col gap-8 sm:flex-row sm:justify-center sm:flex-wrap'>
            {coffees
                .filter(coffee => coffee.available || !onlyAvailableCoffees)
                .map((coffee) => (
                    <article className='relative' key={coffee.id}>
                        {coffee.popular && (
                            <span className='absolute top-2 left-2 bg-orange rounded-2xl py-1 px-3 text-label font-bold'>Popular</span>
                        )}
                        <img className='rounded-lg' src={coffee.image} alt={coffee.name} />
                        <div className='flex justify-between items-center py-2'>
                            <p className='text-white'>{coffee.name}</p>
                            <span className='bg-aqua rounded-md font-semibold px-1'>{coffee.price}</span>
                        </div>
                        {coffee.rating === null ? (
                            <div className='flex'>
                                <img src="../assets/Star.svg" alt="étoile vide" />
                                <p className='text-gray'>No ratings</p>
                                {!coffee.available && (
                                    <p className='text-pastelPink ml-auto'>Sold out</p>
                                )}
                            </div>
                        ) : (
                            <div className='flex'>
                                <img src="../assets/Star_fill.svg" alt="étoile pleine" />
                                <p className='text-gray'><span className='text-white'>{coffee.rating}</span>({coffee.votes} votes)</p>
                                {!coffee.available && (
                                    <p className='text-pastelPink ml-auto'>Sold out</p>
                                )}
                            </div>
                        )}
                    </article>
                ))
            }
        </div>
    )
}
