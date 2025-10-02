import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export default function Lab() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <section className="container max-w-6xl py-10 sm:py-20">
        <h2>
          LAB
          <span>ラボ</span>
        </h2>

        <p className="text-start">ここはメモ用紙です。</p>

        <div className="my-10 md:my-20">
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 grid-rows-2 w-5 h-5 mr-2 justify-end">
                  <div
                    className="bg-yellow-400"
                    style={{ boxShadow: "1px 1px 1px 0px #cccccc" }}
                  ></div>
                  <div></div>
                  <div></div>
                  <div
                    className="bg-yellow-400"
                    style={{ boxShadow: "1px 1px 1px 0px #cccccc" }}
                  ></div>
                </div>
              </div>
              <h1 className="font-bold text-3xl">タイトル01</h1>
            </div>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div
                  className="flex items-center justify-center bg-yellow-400 h-3 w-3 mr-2"
                  style={{ boxShadow: "1px 1px 1px 0px #cccccc" }}
                ></div>
              </div>
              <h1 className="font-bold text-3xl">タイトル02</h1>
            </div>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div className="w-5 h-3 border-l-4 border-b-4 border-yellow-400 transform -rotate-45 mr-2"></div>
              </div>
              <h1 className="font-bold text-3xl">タイトル03</h1>
            </div>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                .test04 {
                  border-width: 0 0 110px 80px;
                  border-color: transparent transparent yellow transparent;
                }
              `,
              }}
            />
            <div className="flex relative">
              <h1 className="font-bold text-3xl">・タイトル04</h1>
              <div className="test04 absolute -top-14 left-0 border-solid transform rotate-30 -z-10"></div>
            </div>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div className="test02 w-4 h-4 border-r-4 border-b-4 border-yellow-400 transform -rotate-45 mr-2"></div>
              </div>
              <h1 className="font-bold text-3xl">タイトル05</h1>
            </div>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="flex">
              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined text-yellow-400">
                  emoji_objects
                </span>
              </div>
              <h1 className="font-bold text-3xl">タイトル06</h1>
            </div>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="flex">
              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-800">
                  atr
                </span>
              </div>
              <h1 className="font-bold text-3xl">タイトル07</h1>
            </div>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="flex">
              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-800">
                  scatter_plot
                </span>
              </div>
              <h1 className="font-bold text-3xl">タイトル08</h1>
            </div>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                .title09 {
                  text-shadow: 2px 2px 1px #465daa, -2px 2px 1px #465daa, 2px -2px 1px #465daa,
                    -2px -2px 1px #465daa, 2px 0px 1px #465daa, 0px 2px 1px #465daa,
                    -2px 0px 1px #465daa, 0px -2px 1px #465daa;
                }
              `,
              }}
            />
            <h2 className="font-bold text-3xl title09 text-white inline-block">
              タイトル09
            </h2>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <h2
              className="font-bold text-3xl text-white"
              style={{
                textShadow:
                  "4px 4px 0px rgba(70, 93, 170, 1), 8px 8px 0px rgba(0, 0, 0, 0.2)",
              }}
            >
              タイトル10
            </h2>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <h2
              className="font-bold text-3xl text-blue-900"
              style={{
                textShadow:
                  "4px 4px 0px rgba(255, 255, 255, 1), 8px 8px 0px rgba(0, 0, 0, 0.2)",
              }}
            >
              タイトル11
            </h2>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                .title12 {
                  background: linear-gradient(180deg, #465DAA 0%, #3DC1D9 85%, #fff 100%);
                  background: -webkit-linear-gradient(-90deg, #465DAA 0%, #3DC1D9 85%, #fff 100%);
                  background-clip: text;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              `,
              }}
            />
            <h2 className="font-bold text-3xl title12 inline-block">
              タイトル12
            </h2>
          </section>

          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                .title13::before {
                  position: absolute;
                  bottom: .5em;
                  left: 0;
                  z-index: -1;
                  color: rgb(255, 255, 255, 1);
                  content: attr(data-word);
                  pointer-events: none;
                }
              `,
              }}
            />
            <h2
              className="font-bold text-3xl title13 relative text-blue-900 before:text-gray-100"
              data-word="FEATURES"
            >
              タイトル13
            </h2>
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .title14 {
                background-image: linear-gradient(70deg,
                    #000 45%,
                    #fff 50%,
                    #000 55%);
                background-size: 500% 100%;
                animation: kira14 4s infinite;
              }

              @keyframes kira14 {
                0% {
                  background-position: 100% 50%;
                }

                100% {
                  background-position: 0% 50%;
                }
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="title14 relative text-transparent bg-clip-text font-bold text-3xl">
              <div className="absolute top-0 left-0 w-full h-full text-transparent -z-10">
                タイトル14 KIRA
              </div>
              タイトル14 KIRA
            </div>
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .title15 {
                animation: slide15 3s infinite;
              }

              @keyframes slide15 {
                0% {
                  transform: translateX(-100%);
                }

                100% {
                  transform: translateX(0);
                }
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="relative overflow-hidden w-auto h-auto font-bold text-3xl">
              <div className="title15 absolute top-0 left-0 bg-blue-300 w-full h-full -z-10 transform -translate-x-full"></div>
              タイトル15 背景色がスライドして動く
            </div>
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .title16 {
                background: linear-gradient(to right, #465DAA, #D83861, #fff);
                background-size: 200% 100%;
                background-clip: text;
                -webkit-background-clip: text;
                animation: AnimationTitle 5s ease infinite;
              }

              @keyframes AnimationTitle {
                0% {
                  background-position: 0% 50%;
                }

                50% {
                  background-position: 100% 50%;
                }

                100% {
                  background-position: 0% 50%;
                }
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <p className="text-3xl font-bold title16 bg-clip-text text-transparent">
              タイトル16
              <br />
              gradation animation!
            </p>
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .title17::before {
                content: "";
                display: block;
                background: linear-gradient(90deg, #465daa 0%, #d83861 50%, #ffdd17 100%);
                height: 2000px;
                width: 2000px;
                position: absolute;
                animation: rotate 8s linear infinite;
                z-index: 0;
              }

              @keyframes rotate {
                from {
                  transform: rotate(0);
                }

                to {
                  transform: rotate(360deg);
                }
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="max-w-md w-full">
              <div className="title17 relative flex items-center justify-center overflow-hidden">
                <p className="text-3xl font-bold relative z-1 w-full bg-white m-2 p-5">
                  タイトル 17
                </p>
              </div>
            </div>
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .shiny {
                background: linear-gradient(-45deg,
                    #68d391 50%,
                    #cdeaa1 60%,
                    #68d391 70%);
                background-size: 600% 100%;
                animation: shine 20s infinite linear;
              }

              .shinydarken {
                background: linear-gradient(-45deg,
                    #68d391 50%,
                    #79984e 60%,
                    #68d391 70%);
                background-size: 600% 100%;
                animation: shine 20s infinite linear;
              }

              @keyframes shine {
                0% {
                  background-position-x: 400%;
                }

                50% {
                  background-position-x: 0%;
                }

                100% {
                  background-position-x: -400%;
                }
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <button className="shiny bg-green-400 text-white rounded-md m-5 px-5 py-3 outline-none cursor-pointer shadow-lg">
              button shinylighten
            </button>
            <button className="shinydarken bg-green-400 text-white rounded-md m-5 px-5 py-3 outline-none cursor-pointer shadow-lg">
              button shinydarken
            </button>
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .yurayura {
                transform-origin: center bottom;
                animation: yurayura 1s linear infinite;
              }

              @keyframes yurayura {
                0%,
                100% {
                  transform: rotate(3deg);
                }

                50% {
                  transform: rotate(-3deg);
                }
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <p>● ゆらゆら</p>
            <img
              src="https://adatype.co.jp/info/wp-content/uploads/2021/01/frog_illust.jpg"
              className="yurayura w-20"
              alt="カエル"
            />
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .poyopoyo {
                animation: poyopoyo 1.5s ease-out infinite;
                opacity: 1;
              }

              @keyframes poyopoyo {
                0%,
                40%,
                60%,
                80% {
                  transform: scale(1.0);
                }

                50%,
                70% {
                  transform: scale(0.97);
                }
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <p>● ぽよぽよ収縮する</p>
            <img
              src="https://adatype.co.jp/info/wp-content/uploads/2021/01/frog_illust.jpg"
              className="poyopoyo w-20"
              alt="カエル"
            />
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .accordion input[type=checkbox]:checked+label::after {
                transform: rotate(315deg);
              }

              .accordion input[type=radio]:checked+label::after {
                transform: rotateX(180deg);
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div className="accordion relative border-b-2 border mb-1 overflow-hidden">
              <input
                id="a01"
                type="checkbox"
                className="absolute -z-10 hidden"
              />
              <label
                htmlFor="a01"
                className="block relative cursor-pointer p-3 after:content-['+'] after:absolute after:right-8 after:top-3 after:transition-transform after:duration-200"
              >
                accordion 1
              </label>
              <div className="tab-content bg-red-100 max-h-0 overflow-hidden transition-[max-height]">
                <p className="m-5">Answer 1</p>
              </div>
            </div>

            <div className="accordion relative border-b-2 border mb-1 overflow-hidden">
              <input
                id="a02"
                type="checkbox"
                className="absolute -z-10 hidden"
              />
              <label
                htmlFor="a02"
                className="block relative cursor-pointer p-3 after:content-['+'] after:absolute after:right-8 after:top-3 after:transition-transform after:duration-200"
              >
                accordion 2
              </label>
              <div className="tab-content bg-red-100 max-h-0 overflow-hidden transition-[max-height]">
                <p className="m-5">Answer 2</p>
              </div>
            </div>

            <div className="accordion relative border-b-2 border mb-1 overflow-hidden">
              <input
                id="a03"
                type="checkbox"
                className="absolute -z-10 hidden"
              />
              <label
                htmlFor="a03"
                className="block relative cursor-pointer p-3 after:content-['+'] after:absolute after:right-8 after:top-3 after:transition-transform after:duration-200"
              >
                accordion 3
              </label>
              <div className="tab-content bg-red-100 max-h-0 overflow-hidden transition-[max-height]">
                <p className="m-5">Answer 3</p>
              </div>
            </div>
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .fade-up {
                animation-name: fadeUpAnime;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                opacity: 0;
              }

              @keyframes fadeUpAnime {
                from {
                  opacity: 0;
                  transform: translateY(100px);
                }

                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div id="checkArea" className="h-[calc(1rem*1.5)]">
              aaa
            </div>
            <div id="scrollArea" className="border-2 w-96 h-40 overflow-scroll">
              <div
                id="targetArea"
                className="h-28 w-36 my-48 mx-auto bg-red-200 flex justify-center items-center"
              >
                これが
                <br />
                表示されると
                <br />
                trueになります
              </div>
            </div>
          </section>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .border_reception {
                position: relative;
                height: 2px;
                border-width: 0;
                background-image: -webkit-linear-gradient(left,
                    transparent 0%,
                    #fbcf00 50%,
                    transparent 100%);
                background-image: linear-gradient(90deg,
                    transparent 0%,
                    #fbcf00 50%,
                    transparent 100%);
              }
            `,
            }}
          />
          <section className="container mx-auto px-5 lg:px-48 mb-20">
            <div>
              <hr className="border_reception" />
            </div>
          </section>
        </div>

        <div className="text-center">
          <Link to="/">
            <Button variant="outline">Back to TOP</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
