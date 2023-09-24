import { FormsHeader } from '@/components/organisms';
import React, { useState, useEffect, ChangeEvent } from 'react';

import { css } from '@emotion/react';
import ProfileForm from './ProfileForm';
import { FormType } from '@/pages/forms';
import FavoritForm from './FavoriteForm';
import HealthForm from './HealthForm';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import axios from 'axios';

interface Props {
  step?: number;
  handleShowPopup: () => void;
  handleNext?: () => void;
  handleBack?: () => void;
  slideDirection: 'left' | 'right';
}

export default function Forms({
  step,
  handleShowPopup,
  handleNext,
  handleBack,
  slideDirection,
}: Props) {
  let FormContent: JSX.Element;
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const [imagePreview, setImagePreview] = useState<string>('');
  const [profileName, setProfilename] = useState('');
  const [favoriteMent, setFavoriteMent] = useState('');
  const [favoriteReason, setFavoriteReason] = useState('');
  const [favoriteLink, setFavoriteLink] = useState('');
  const [keywordList, setKeywordList] = useState<{ id: number; keyword: string }[]>([]);
  const [imageFile, setImageFile] = useState<string | Blob | undefined>(undefined);

  /*
  const submitFinal = async () => {
    const dto = {
      title: favoriteMent,
      content: favoriteReason,
      target: profileName,
      linkUrl: favoriteLink,
      keywords: keywordList,
    };
    const formData = new FormData();
    if (!imageFile) return;
    formData.append('file', imageFile);

    formData.append('dto', JSON.stringify(dto));

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL as string}/articles`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      const params = JSON.stringify(dto);
      router.push(`/result?dto=${params}`);
    }
  };
  */

  const submitFinal = async () => {
    const dto = {
      title: favoriteMent,
      content: favoriteReason,
      target: profileName,
      linkUrl: favoriteLink,
      keyword: keywordList.map(({ keyword }) => keyword),
      file: imageFile,
    };
    const formData = new FormData();
    if (!imageFile) return;
    formData.append('file', imageFile);

    formData.append('dto', JSON.stringify(dto));

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL as string}/articles`, {
        method: 'POST',
        body: JSON.stringify({
          ...dto,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 서버 응답 처리
      const responseData = await response.json();
      console.log(responseData);
    } catch (e) {
      console.error(e);
    } finally {
      const params = JSON.stringify(dto);
      router.push(`/result?dto=${params}`);
    }
  };

  const onSubmit = (values: any) => {};
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    if (file) {
      const data = new FormData();
      data.append('file', file);

      const res = await axios.post<{ message: string }>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/image`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (!res.data.message) return;

      const imageUrl = URL.createObjectURL(file);
      setImageFile(res.data.message);
      setImagePreview(imageUrl);
    }
  };
  const handleChangeProfileName = (e: ChangeEvent<HTMLInputElement>) => {
    setProfilename(e.target.value);
  };
  const handleChangeFavoriteMent = (e: ChangeEvent<HTMLInputElement>) => {
    setFavoriteMent(e.target.value);
  };

  const handleChangeFavoriteReasson = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFavoriteReason(e.target.value);
  };
  const handleChangeFavoriteLink = (e: ChangeEvent<HTMLInputElement>) => {
    setFavoriteLink(e.target.value);
  };

  const handleAddKeywordItem = (keyword: string) => {
    setKeywordList([...keywordList, { keyword, id: Math.random() }]);
  };
  const handleDeleteKeywordItem = (selectedId: number) => {
    setKeywordList(keywordList.filter(({ id }) => selectedId !== id));
  };

  switch (step) {
    case FormType.Profile:
      FormContent = (
        <ProfileForm
          step={step}
          slideDirection={slideDirection}
          name="picture"
          control={control}
          rules={{ required: true }}
          imagePreview={imagePreview}
          handleShowPopup={handleShowPopup}
          handleFileChange={handleFileChange}
          profileName={profileName}
          handleChangeProfileName={handleChangeProfileName}
          handleNext={handleNext}
        />
      );
      break;
    case FormType.Favorite:
      FormContent = (
        <FavoritForm
          step={step}
          slideDirection={slideDirection}
          favoriteMent={favoriteMent}
          handleChangeFavoriteMent={handleChangeFavoriteMent}
          handleShowPopup={handleShowPopup}
          favoriteReason={favoriteReason}
          handleChangeFavoriteReason={handleChangeFavoriteReasson}
          favoriteLink={favoriteLink}
          handleChangeFavoriteLink={handleChangeFavoriteLink}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      );
      break;
    case FormType.Health:
      FormContent = (
        <HealthForm
          step={step}
          slideDirection={slideDirection}
          handleBack={handleBack}
          handleNext={submitFinal}
          handleShowPopup={handleShowPopup}
          keywordList={keywordList}
          handleAddKeywordItem={handleAddKeywordItem}
          handleDeleteKeywordItem={handleDeleteKeywordItem}
        />
      );
      break;
    default:
      throw new Error('Invalid step');
  }

  return <AnimatePresence>{FormContent}</AnimatePresence>;
}
