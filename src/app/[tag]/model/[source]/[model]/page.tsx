import React from 'react';
import Link from 'next/link';

import getModels from '@/app/api/getModels';
import { MY_DOMAIN, USER_ID } from '@/app/constants';
import VideoPlayer from '@/app/components/Player';
import Description from '@/app/components/Description';

import styles from './styles.module.css';

type PropTypes = {
  params: {
    model: string;
  }
};

async function ModelPage({ params: { model } }: PropTypes) {
  const { models: [currentModel] } = await getModels({ modelsList: model });

  const link = `${MY_DOMAIN}?tag=girls&onlineModels=${currentModel.username}&userId=${USER_ID}`;

  return (
    <div className={styles.Model}>
      <Description header={`${currentModel.username}'S WEB LIVE CAM`} />
      <Link
        href={link}
        target="_blank"
      >
         <div className={styles.Model__playerWrapper}>
            <VideoPlayer
              src={currentModel.stream.url}
            />
         </div>
      </Link>
    </div>
  );
}

export default ModelPage;
