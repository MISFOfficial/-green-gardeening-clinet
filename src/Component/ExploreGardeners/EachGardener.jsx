import React from 'react';

const EachGardener = ({ data }) => {
    return (
        
        <div class="bg-gray-50 border border-[#ded8d8] max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
                <img className='h-30 w-30 rounded-4xl object-cover' src={data.image} alt="" />
                <div className='flex flex-col gap-1'>
                    <h3 class="text-xl leading-6 mt-1 font-bold text-gray-900">{data.name}</h3>
                    <h3 class="text-lg leading-6 mt-1 font-medium text-gray-900">Age: {data.age}</h3>
                </div>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Exp: {data.experiences}
                </p>
            </div>
            <div class="border-t border-gray-200">
                <dl>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Gender
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.gender}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Status:
                        </dt>
                       <dd className={`mt-1 text-sm sm:mt-0 sm:col-span-2 font-bold ${data.status === 'Active' ? 'text-white bg-[green] w-fit px-2 py-1 rounded-[8px]' : 'text-white bg-[red] w-fit px-2 py-1 rounded-[8px]'}`}>
                            {data.status}
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Total shared tips:
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.total_shared_tips}
                        </dd>
                    </div>
                    <div className='flex justify-end pr-5 py-2 bg-gray-50'>
                        <button className='btn bg-[green] text-white'>Follow</button>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default EachGardener;