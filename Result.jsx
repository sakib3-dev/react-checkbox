import Container from "../../Container";
import Flex from "../../Flex";
import { FaCheck, FaStar } from "react-icons/fa";

const Result = () => {
  return (
    <section className="pt-12 pb-32">
      <Container>
        <Flex>
          <aside>
            {/* tag */}
            <div className="flex gap-4">
                  <label
                    htmlFor="check-box-1"
                    className="cursor-pointer relative"
                  >
                    <input
                      type="checkbox"
                      id="check-box-1"
                      className="w-6 h-6 appearance-none border-[2px] rounded-[8px] border-GainsBoro"
                    />
                    <FaCheck className="text-BrandOne absolute top-1 left-1 text-opacity-0 check-1 transition" />
                  </label>
                </div>
          </aside>
          <main></main>
        </Flex>
      </Container>
    </section>
  );
};

export default Result;
