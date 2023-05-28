import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const GalleryPage = () => {
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch('/api/images');
            const data = await response.json();
            const images = data.map((image, index) => ({
                imageUrl: `/foto/${index}.jpg`,
                caption: image.caption,
            }));
            setImages(images);
        };

        fetchImages();
        console.log(images)
    }, []);

    const resizedImages = images.map(image => ({
        ...image,
        height: 2,
        width: 2
        // height: Math.floor(Math.random() * 1) + 1,
        // width: Math.floor(Math.random() * 1) + 1,
    }));

    return (
        <>
            <Header></Header>
            {/* <!-- Hero Start --> */}
            {/* <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-white mb-md-4">Gallery</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5">GALLERY</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Hero End --> */}
            <div>
                <Gallery photos={resizedImages.map(({ imageUrl, ...rest }) => ({ src: imageUrl, ...rest }))} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={resizedImages.map(({ imageUrl, ...rest }) => ({
                                    source: imageUrl,
                                    ...rest,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
            <Footer></Footer>
        </>
    )
}

export default GalleryPage