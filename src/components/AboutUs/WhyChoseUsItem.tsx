import Image from "next/image";
export default function WhyChoseUsItem(props: any) {
    const { item } = props;

    return (
        <div className="why-chose-us-item flex flex-col gap-2 p-6">
            <Image className="why-chose-us-item--image" src={item.image} alt={item.title} width={100} height={100} />
            <h3 className="text-2xl font-semibold why-chose-us-item--title">{item.title}</h3>
            <p className="text-gray-600 content-text why-chose-us-item--description">{item.description}</p>
        </div>
    )
}