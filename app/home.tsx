import clsx from "clsx";

export default function home(){

    const status = 'active'

    return(
        <div className={clsx(
            'text-red-500',
            {
                "bg-red-300" : status && 'active'
            },
        )} />
    )
}
