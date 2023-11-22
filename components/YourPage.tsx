import FadeInOut from "./FadeInOut";

const YourPage: React.FC = () => {
  return (
    <div>
      <h1>Your Page Content</h1>
      <FadeInOut>
        <p>This content will fade in and out as you scroll down.</p>
      </FadeInOut>
    </div>
  );
};

export default YourPage;
