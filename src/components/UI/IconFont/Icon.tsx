/* eslint-disable react/prop-types */
import React from 'react';

import classNames from 'classnames';

import { T4fontClassname } from '@styles/t4font/t4font';

export const Icon = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement> & { icon: T4fontClassname }) => {
  // @ts-ignore
  return <i className={classNames(props.icon, className)} {...props} />;
};
