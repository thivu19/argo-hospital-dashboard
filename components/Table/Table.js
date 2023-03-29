import React from 'react';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Table.css';

// Default UI component for user interaction
// Destructure it out to make it easier to edit/customize
export const Table = ({
    rows,
    headers,
    borderWidth = 'none',
    cellPadding = 'medium',
    cellTextColor = '#595959',
    headerTextColor = '#202020',
    cellBorderColor = '#d9d9d9',
    headerBorderColor = '#d9d9d9',
    backgroundColor = '#ffffff',
    headerBackgroundColor = '#f0f1f1',
}) => {
    // Handle errors with props
    // 1. The header length must be at least 1
    // 2. The length of all of the rows must equal the header length
    useEffect(() => {
        if (headers.length < 1) {
            throw Error('Must have at least one header');
        } else if (!rows.every(r => r.length === headers.length)) {
            throw Error('Row length must equal header length');
        }
    }, [rows, headers]);

    const cellPaddingMap = {
        small: '4px',
        medium: '8px',
        large: '15px',
    };

    // Not really needed since it doesn't change, so consider not mapping it
    const borderWidthMap = {
        none: '0px',
        thin: '1px',
        medium: '5px',
        thick: '10px',
    };

    return (
        <div className={styles.main}>
        {headers.map((h, columnIndex) => (
          <div key={columnIndex} className={styles.column}>
            <div
              className={styles.header}
              style={{
                color: headerTextColor,
                padding: cellPaddingMap[cellPadding],
                backgroundColor: headerBackgroundColor,
                border: `${borderWidthMap[borderWidth]} solid ${headerBorderColor}`,
                bordertop: `${borderWidthMap[borderWidth]} solid ${cellBorderColor}`,
              }}
            >
              {h}
            </div>

            <div className={styles.rows}>
              {rows.map((r, rowIndex) => (
                <div
                  key={rowIndex}
                  className={styles.cell}
                  style={{
                    color: cellTextColor,
                    backgroundColor: backgroundColor,
                    padding: cellPaddingMap[cellPadding],
                    border: `${borderWidthMap[borderWidth]} solid ${cellBorderColor}`,
                    bordertop: `${borderWidthMap[borderWidth]} solid ${cellBorderColor}`,
                  }}
                >
                  {r[columnIndex]}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      );
};

Table.propTypes = {
    cellTextColor: PropTypes.string,
    headerTextColor: PropTypes.string,
    cellBorderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    headerBorderColor: PropTypes.string,
    headerBackgroundColor: PropTypes.string,
    borderWidth: PropTypes.oneOf(['none', 'thin', 'medium', 'thick']),
    cellPadding: PropTypes.oneOf(['small', 'medium', 'large']),
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};