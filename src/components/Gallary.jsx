import axios from "axios"
import { useEffect, useState } from "react"


const Gallary = () => {

    const [userData, setuserData] = useState([])

    const [index, setindex] = useState(1)

    const ApiUrl = `https://picsum.photos/v2/list?page=${index}&limit=30`

    const getData = async () => {
        const response = await axios.get(ApiUrl)
        setuserData(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getData()
    }, [index])


   let PrintUserData = <h3 className="text-xl font-semibold text-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading....</h3>


    if (userData.length > 0) {
        PrintUserData = userData.map((elem, idx) => {
            return <div key={idx}>
                <a href={elem.url} target="_blank">
                    <div className="h-50 w-50 bg-white overflow-hidden rounded">
                        <img className="h-full w-full object-cover" src={elem.download_url} alt="" />
                    </div>
                    <h2 className="font-bold">{elem.author}</h2>
                </a>
            </div>
        })
    }
    return (
        <>
            <div className="bg-black overflow-auto h-screen py-10 text-white">
                <div className="flex flex-wrap justify-center gap-4 flex-grow min-h-[90%]">
                    {PrintUserData}
                </div>
                <div className="flex justify-center gap-6 mt-10">
                    <button style={{ opacity: index == 1 ? 0.6 : 1 }} onClick={() => {
                        if (index > 1) {
                            setindex(index - 1)
                            setuserData([])
                        }
                    }} className="cursor-pointer active:scale-95 bg-amber-500 py-2 px-6 rounded hover:bg-amber-600 transition-all">Prev</button>
                    <h4 className="flex justify-center items-center">Page {index}</h4>
                    <button onClick={() => {
                        setindex(index + 1)
                        setuserData([])
                    }} className="cursor-pointer active:scale-95 bg-amber-500 py-2 px-6 rounded hover:bg-amber-600 transition-all">Next</button>
                </div>
            </div>
        </>
    )
}

export default Gallary