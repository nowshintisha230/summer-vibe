import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}) => {
    return (
        <Card className=''>
            <div>
                <Image src={product.image} alt="" height={200} width={200}></Image>
            </div>
        </Card>
    );
};

export default ProductCard;