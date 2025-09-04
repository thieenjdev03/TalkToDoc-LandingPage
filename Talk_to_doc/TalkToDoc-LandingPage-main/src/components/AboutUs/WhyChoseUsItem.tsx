import Image from "next/image"
import { motion } from 'framer-motion'

export default function WhyChoseUsItem(props: any) {
    const { item, index } = props

    return (
        <motion.div
            className="why-chose-us-item flex flex-col gap-2 p-4 md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
        >
            <Image 
                unoptimized
                className="why-chose-us-item--image w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
                src={item.image} 
                alt={item.title} 
                width={100} 
                height={100} 
            />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold why-chose-us-item--title">{item.title}</h3>
            <p className="text-sm md:text-base text-gray-600 content-text why-chose-us-item--description">{item.description}</p>
        </motion.div>
    )
}