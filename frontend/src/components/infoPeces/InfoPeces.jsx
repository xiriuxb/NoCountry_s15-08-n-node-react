const tools = [
    {
        name: "Caña Madera",
        description: "Más rústico para peces rápidos",
        img:"/caña.jpg"
    },
    {
        name: "Botas de ule",
        description: "Resistentes al agua",
        img:"/botas.jpg"
    },
    {
        name: "Anzuelo",
        description: "Pieza de madera con olor para atraer peces",
        img:"/anzuelo.jpg"
    }
];

const fishes = [
    {
        name: "Salmon",
        description: "En Rio Negro",
        img:"/Salmon.jpg"
    },
    {
        name: "Carite",
        description: "En Pilar",
        img:"/carite.jpg"
    }
]

const InfoPeces = () => {
    return (
        <div className='p-6 text-white'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex p-2 bg-zinc-900/50 rounded-md items-end w-5/12'>
                    <div className="h-full">
                        <img src='/otoño.jpg' className="rounded-md h-full object-cover" />
                    </div>
                    <div className='flex-col pl-2'>
                        <h4 className='text-lg text-left font-bold'>Otoño</h4>
                        <p className='text-sm text-left'>La mejor temporada de pesca de salmon </p>
                    </div>
                </div>
                <div className='flex flex-1 items-center'>
                    {
                        fishes.map(fish=>{
                            return(
                                <FishDescComponent fishInfo={fish}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full'>
                <div>
                    <h3 className="py-2 text-lg font-bold text-center">Las herramientas más usadas para estas especies</h3>
                </div>
                <div className='flex w-full flex-wrap justify-around'>
                {
                    tools.map(tool => {
                        return (
                            <ToolDescComponent toolInfo={tool} />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default InfoPeces;

const ToolDescComponent = ({toolInfo}) => {
    return (
        <div className='flex flex-col sm:flex-row md:flex-col justify-start p-1 w-full md:w-1/2 md:max-w-40 md:min-w-40 bg-zinc-500/10 rounded-md'>
            <img src={toolInfo.img} className='rounded-md h-24 max-h-24'/>
            <div className="flex flex-col p-1 w-full">
                <h5 className='text-center text-lg font-bold'>{toolInfo.name}</h5>
                <p className='text-sm text-center'>{toolInfo.description}</p>
            </div>
        </div>
    )
}

const FishDescComponent = ({fishInfo}) => {
    return (
        <div className='w-3/4 px-2'>
            <img src={fishInfo.img ? fishInfo.img : "/Salmon.jpg"} className='w-full h-14' />
            <p className='text-sm font-bold text-center'>{fishInfo.name}</p>
            <p className='text-sm text-center'>{fishInfo.description}</p>
        </div>
    )
}