const StarRating = ({ rating }: { rating: number }) => {
    const totalStars = 5;

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => (
                 <span key={index} className={index < rating ? 'filled' : 'empty'}>
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;