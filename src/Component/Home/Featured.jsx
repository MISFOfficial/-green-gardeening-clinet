import React, { use } from 'react';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';

const Featured = ({AGdata}) => {

    const {theme}=use(AuthContext)


    return (
        <div>
            <div class={`flex w-full p-4 max-w-lg flex-col rounded-lg ${theme? '' : 'bg-white'} shadow-sm border border-slate-200 `}>
                <div class="flex items-center gap-4 text-slate-800">
                    <div className="avatar indicator">
                        <span className="indicator-item badge bg-[green] text-white">{AGdata.status}</span>
                        <div className="h-22 w-22 rounded-lg">
                            <img
                                alt="Tailwind CSS examples"
                                src={AGdata.image}
                            />
                        </div>
                    </div>
                    <div class="flex w-full flex-col">
                        <div class="flex items-center justify-between">
                            <h5 class={`${theme ? 'text-white' : 'text-black'} text-xl font-semibold `}>
                                {AGdata.name}
                            </h5>

                        </div>
                        <p class={`${theme ? 'text-white' : 'text-gray-800'} text-xs uppercase font-bold  mt-0.5`}>
                            Age: {AGdata.age}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;