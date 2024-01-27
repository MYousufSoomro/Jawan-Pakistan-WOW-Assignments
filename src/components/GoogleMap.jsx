const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81167.41216486221!2d-97.19916210321419!3d25.963884034818122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866fb4707bb2c6d5%3A0x733ddfd7c92ac250!2sBagdad%20Lighthouse!5e0!3m2!1sen!2s!4v1706350905578!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
