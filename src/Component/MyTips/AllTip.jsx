import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AllTip = ({ myTips, setMyTips }) => {
    // const [tips, setTips] = useState(myTips)

    // const navigate=useNavigation()

    console.log(myTips)
    // console.log(tips)

    const handleDeleteTips = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://green-gardening-server.vercel.app/tips/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then((result) => {
                        console.log(result)
                        if (result.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tips has been deleted.",
                                icon: "success"
                            });
                            const remainingTips = myTips.filter(tip => tip._id !== _id);
                            setMyTips(remainingTips)
                        }
                    })
            }
        });
    }

    //    const handleUpdatePage = () => {
    //         navigate('/mytips/details');
    //     };


    return (
        <div className='py-5 md:py-10'>
            <Helmet>
                <title>
                    Green || My Tips
                </title>
            </Helmet>
            <div className="overflow-x-auto lg:px-60">
                {myTips.length === 0 ? (
                    <div className="text-center text-xl font-semibold text-red-500">
                        You have no tips
                    </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='text-[12px] md:text-[16px]'>Title</th>
                                <th className='text-[12px] md:text-[16px]'>Plant Type/Topic</th>
                                <th className='text-[12px] md:text-[16px]'>Difficulty Level</th>
                                <th className='text-[12px] md:text-[16px]'>Description</th>
                                <th className='text-[12px] md:text-[16px]'>Category</th>
                                <th className='text-[12px] md:text-[16px]'>Availability</th>
                                <th className='text-[12px] md:text-[16px]'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myTips.map(data => (
                                    <tr key={data._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-15 w-15">
                                                        <img
                                                            src={data.imUrl}
                                                            alt="Tip"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-center">{data.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.plt}</td>
                                        <td>{data.dl}</td>
                                        <td>{data.description}</td>
                                        <td>{data.category}</td>
                                        <td>{data.availability}</td>
                                        <td className='flex'>

                                            <Link to={`/mytips/${data._id}`}><button className="btn w-full bg-[green] text-white mb-1 flex-1">Update</button></Link>

                                            <button onClick={() => handleDeleteTips(data._id)} className="btn flex-1 bg-[red] w-full text-white">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );

};

export default AllTip;