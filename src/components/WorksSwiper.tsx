"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { useWorksData } from "../hooks/useWorksData";
import { useParams } from "react-router-dom";
import { MediaItem } from "../data/works";

export default function WorksSwiper() {
  const { id } = useParams<{ id: string }>();
  const { getWork } = useWorksData();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [validVideos, setValidVideos] = useState<MediaItem[]>([]);
  const [isChecking, setIsChecking] = useState(true);

  const workId = id ? parseInt(id, 10) : 0;
  const work = getWork(workId);

  // 動画ファイルの存在確認
  useEffect(() => {
    // 初期化
    setIsChecking(true);
    setValidVideos([]);
    
    if (!work) {
      setIsChecking(false);
      return;
    }

    const videos = work.mediaData.videos || [];
    
    // 動画が存在しない場合は即座に非表示
    if (!videos || videos.length === 0) {
      setValidVideos([]);
      setIsChecking(false);
      return;
    }

    // 各動画ファイルの存在を確認
    const checkVideos = async () => {
      // type: "video"のものだけをフィルタリング
      const videoItems = videos.filter((item): item is MediaItem => item.type === "video");
      
      // 動画アイテムが存在しない場合
      if (videoItems.length === 0) {
        setValidVideos([]);
        setIsChecking(false);
        return;
      }
      
      const videoChecks = await Promise.all(
        videoItems.map(async (video) => {
          try {
            const response = await fetch(video.src, { method: "HEAD" });
            return response.ok ? video : null;
          } catch {
            return null;
          }
        })
      );

      const existingVideos = videoChecks.filter((v): v is MediaItem => v !== null);
      setValidVideos(existingVideos);
      setIsChecking(false);
    };

    checkVideos();
  }, [work, workId]);

  if (!work) {
    return <div>作品が見つかりません</div>;
  }

  // チェック中は何も表示しない
  if (isChecking) {
    return null;
  }

  // 有効な動画が存在しない場合はスライダーを非表示
  // 動画のみをチェックし、画像が含まれていても動画がなければ非表示
  if (validVideos.length === 0) {
    return null;
  }

  const mediaList = [
    ...validVideos,
    ...(work.mediaData.images || []),
  ];
  
  // mediaListが空の場合も非表示
  if (mediaList.length === 0) {
    return null;
  }
  
  // 動画が1つも含まれていない場合も非表示（画像のみの場合は非表示）
  const hasVideosInList = mediaList.some(item => item.type === "video");
  if (!hasVideosInList) {
    return null;
  }
  
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full h-[80%]"
      >
        {mediaList.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <img 
                src={item.src} 
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="relative w-full pb-[56.25%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full h-[20%] box-border !pt-5"
      >
        {mediaList.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <img 
                src={item.src} 
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="relative w-full pb-[56.25%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
