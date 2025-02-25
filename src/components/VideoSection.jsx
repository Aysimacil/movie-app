const VideoSection = ({ videoKey }) => {
  return (
    <div className='mx-auto my-3 w-10/12 md:w-3/5'>
      <div className='ratio ratio-16x9'>
        <iframe
          className='rounded-xl'
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
          title='YouTube video'
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
