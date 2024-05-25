import React from 'react'

interface Props {
    params: {
        slug: string[]
    };
    searchParams: {
        sort: string
    };
}

const ProductPage = ({params: {slug}, searchParams: {sort}}: Props) => {
    return (
        <div>{slug} {sort}</div>
    )
}

export default ProductPage