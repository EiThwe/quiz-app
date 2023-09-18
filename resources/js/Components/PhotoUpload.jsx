import React from "react";
import ImageUploading from "react-images-uploading";
import { RiFileUserLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

const PhotoUpload = ({ form }) => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);

        const fileList = imageList?.map((item) => item.file);
        form.setFieldValue("photos", fileList);
    };
    return (
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
            <p>Upload Photo</p>

            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className=" flex flex-col gap-5">
                        {imageList.length == 0 && (
                            <div className="flex flex-col gap-5 items-center">
                                <div
                                    className={`w-[200px] h-[200px] border-dashed bg-gray-100 border-[2px]  ${
                                        form.errors.photos
                                            ? "border-red-500"
                                            : "border-gray-800"
                                    } rounded-full flex justify-center items-center relative`}
                                    style={
                                        isDragging
                                            ? {
                                                  background: "green",
                                                  color: "white",
                                              }
                                            : undefined
                                    }
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    <button className="absolute bottom-0 right-5 bg-white w-10 h-10 rounded-full flex justify-center items-center border shadow-md">
                                        <BiEditAlt />
                                    </button>
                                    <RiFileUserLine size={50} />
                                </div>
                                <p className="">
                                    Click the edit button or Drop file to upload
                                </p>
                                {form.errors.photos && (
                                    <p className="text-red-600 text-xl mt-1">
                                        {form.errors.photos}
                                    </p>
                                )}
                            </div>
                        )}
                        {imageList.map((image, index) => (
                            <div key={index}>
                                <div className="img-wrapper  w-[200px] h-[200px] border-dashed border-[2px] border-gray-800 rounded-full flex justify-center items-center overflow-hidden">
                                    <img
                                        src={image["data_url"]}
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex gap-5 justify-center my-5">
                                    <button
                                        className="px-2 py-1 rounded-md border border-green-400 text-green-400"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onImageUpdate(index);
                                        }}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="px-2 py-1 rounded-md border border-red-400 text-red-400"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onImageRemove(index);
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};

export default PhotoUpload;
