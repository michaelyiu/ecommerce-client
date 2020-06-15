import React, { useRef } from "react";

import { Card } from '@material-ui/core';

import { Product } from '../../types/types';

import { useStyles } from './ImageSelectionStyles';

const ImageSelection: React.FC<Product> = (props) => {
	const classes = useStyles();
	let productImage = useRef<HTMLImageElement>(null);

	const switchImage = (img: string) => {
		if (productImage && productImage.current)
			productImage.current.src = img
	}

	return (
		<React.Fragment>
			<Card elevation={4} >
				<img src={props.images[0]} alt='the phone itself' className={classes.productImg} ref={productImage} />
			</Card>
			<div className={classes.tabContainer}>
				{
					props.images.map(
						(img: string) => (
							<Card key={img} elevation={4} className={classes.imageTab} onClick={() => switchImage(img)}>
								<img src={img} alt='the phone itself' className={classes.smallProductImg} />
							</Card>
						)
					)
				}
			</div>
		</React.Fragment>
	)
}

export default ImageSelection;