export default function Breadcrumb(props: { title: string }) {
    return (
        <> 
            <div
                style={{
                    backgroundImage: 'url(https://res.cloudinary.com/dut4zlbui/image/upload/v1743442886/mqoggqnubqrcj5rq10oa.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '40px 20px',
                }}
                className="lg:text-3xl text-center mb-8 text-[#012047] font-bold "
            >
                {props.title}
            </div></>
    )
}
