import { assert } from 'chai';
import { ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import draftToHtml from '../index';

describe('draftToHtml test suite', () => {
  it('should return correct html', () => {
    const html = '<p>testing</p>';
    const arrContentBlocks = convertFromHTML(html);
    const contentState = ContentState.createFromBlockArray(arrContentBlocks);
    const result = draftToHtml(convertToRaw(contentState));
    assert.equal(html, result);
  });

  it('should return empty string for undefined input', () => {
    const result = draftToHtml(undefined);
    assert.equal('', result);
  });

  it('should return correct result for list', () => {
    let html = '<ul><li>1</li><li>2</li><li>3</li></ul>';
    let output = '<ul><li>1</li><li>2</li><li>3</li></ul>';
    let arrContentBlocks = convertFromHTML(html);
    let contentState = ContentState.createFromBlockArray(arrContentBlocks);
    let result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);

    html = '<ol><li>1</li><li>2</li><li>3</li></ol>';
    output = '<ol><li>1</li><li>2</li><li>3</li></ol>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);

    html = '<ol><li>1</li><ol><li>2</li></ol><li>3</li></ol>';
    output = '<ol><li>1</li><ol><li>2</li></ol><li>3</li></ol>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);

    html = '<ol><li>1</li><ol><li>2</li><li>3</li></ol><li>4</li></ol>';
    output = '<ol><li>1</li><ol><li>2</li><li>' + '3</li></ol><li>4</li></ol>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);

    html =
      '<ol><li>1</li><ol><li>2</li><ol><li>3</li></ol>' +
      '</ol><li>3</li></ol>';
    output =
      '<ol><li>1</li><ol><li>2</li><ol><li>3' +
      '</li></ol></ol><li>3</li></ol>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);
  });

  it('should return correct result for inline styles color', () => {
    let html = '<ul><li>1</li><li>2</li><li>3</li></ul>';
    let output = '<ul><li>1</li><li>2</li><li>3</li></ul>';
    let arrContentBlocks = convertFromHTML(html);
    let contentState = ContentState.createFromBlockArray(arrContentBlocks);
    let result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);

    html = '<ol><li>1</li><li>2</li><li>3</li></ol>';
    output = '<ol><li>1</li><li>2</li><li>3</li></ol>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);

    html = '<ol><li>1</li><ol><li>2</li></ol><li>3</li></ol>';
    output = '<ol><li>1</li><ol><li>2</li></ol><li>3</li></ol>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);

    html = '<ol><li>1</li><ol><li>2</li><li>3</li></ol><li>4</li></ol>';
    output = '<ol><li>1</li><ol><li>2</li><li>3' + '</li></ol><li>4</li></ol>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);

    html =
      '<ol><li>1</li><ol><li>2</li><ol><li>3</li></ol>' +
      '</ol><li>3</li></ol>';
    output =
      '<ol><li>1</li><ol><li>2</li><ol><li>3' +
      '</li></ol></ol><li>3</li></ol>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(output, result);
  });

  it('should return correct result for different heading styles', () => {
    let html = '<h1>testing</h1>';
    let arrContentBlocks = convertFromHTML(html);
    let contentState = ContentState.createFromBlockArray(arrContentBlocks);
    let result = draftToHtml(convertToRaw(contentState));
    assert.equal(html, result);

    html = '<h2>testing</h2>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(html, result);

    html = '<blockquote>testing</blockquote>';
    arrContentBlocks = convertFromHTML(html);
    contentState = ContentState.createFromBlockArray(arrContentBlocks);
    result = draftToHtml(convertToRaw(contentState));
    assert.equal(html, result);
  });

  it('should return correct result when there are emojis', () => {
    const html = '<p><strong>👈</strong>👈</p>';
    const arrContentBlocks = convertFromHTML(html);
    const contentState = ContentState.createFromBlockArray(arrContentBlocks);
    const result = draftToHtml(convertToRaw(contentState));
    assert.equal(html, result);
  });
});
