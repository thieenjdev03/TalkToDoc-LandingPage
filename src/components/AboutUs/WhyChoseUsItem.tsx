import Image from "next/image";
import { motion } from 'framer-motion';

export default function WhyChoseUsItem(props: any) {
    const { item, index } = props;

    return (
        <motion.div
            className="why-chose-us-item flex flex-col gap-2 p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
        >
            <Image 
                unoptimized
                className="why-chose-us-item--image" src={item.image} alt={item.title} width={100} height={100} />
            <h3 className="text-2xl font-semibold why-chose-us-item--title">{item.title}</h3>
            <p className="text-gray-600 content-text why-chose-us-item--description">{item.description}</p>
        </motion.div>
    )
}