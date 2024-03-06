import Link from '@docusaurus/Link';
import React from 'react';
import PricingBusinessCritical from './businessCritical';
import PricingEnterprise from './enterprise';
import PricingSandBox from './sandbox';
import PricingStandard from './standard';
import styles from './styles.module.scss';

export default function ServicePlan() {
  return (
    <div className={styles.bgColor}>
      <div className="container">
        <div className={styles.header}>
          <h2>Ready to get started? Choose your plan.</h2>
          <p>
            The fastest way to build and iterate with our AI-native vector
            database.
          </p>
        </div>
        <div className={styles.planContainer}>
          <PricingSandBox />
          <h3 className={styles.packageHeader}>Serverless Packages</h3>
          <div className={styles.plan}>
            <PricingStandard />
            <PricingEnterprise />
            <PricingBusinessCritical />
          </div>
        </div>
      </div>
    </div>
  );
}