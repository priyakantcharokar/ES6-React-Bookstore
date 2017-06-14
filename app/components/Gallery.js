import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let noImage = 'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/picture-128.png';
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return (
                            <a 
                                key={index} 
                                className="book"
                                href={infoLink}
                                target="_blank"
                            >
                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : noImage} 
                                     alt="book image"
                                     className="book-img"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;