import React, { Component } from 'react';
import { convertBytes } from './helpers';
import FirstImg from '../assets/img/1st.png';
import SecondImg from '../assets/img/2nd.png';
import moment from 'moment';

class Main extends Component {
	render() {
		return (
			<div className='container-fluid my-5 text-center'>
				<div className='my-5'>
					<img src={FirstImg} className='img-fluid' alt={''} />
				</div>
				<div className='row'>
					<main role='main' className='col-lg-9 mx-auto'>
						<div className='content'>
							<p>&nbsp;</p>
							<div className='card mb-3 mx-auto bg-dark p-5'>
								<h2 className='text-white bg-dark'>
									Upload File
								</h2>
								<form
									onSubmit={(event) => {
										event.preventDefault();
										const description =
											this.fileDescription.value;
										this.props.uploadFile(description);
									}}
								>
									<div className='form-group my-3'>
										<br></br>
										<textarea
											id='fileDescription'
											type='text'
											ref={(input) => {
												this.fileDescription = input;
											}}
											className='form-control'
											placeholder='Description...'
											rows='3'
											required
										/>
									</div>
									<div class='input-group mb-3'>
										<input
											type='file'
											class='form-control'
											onChange={this.props.captureFile}
											className='text-white my-3'
										/>
									</div>
									<button
										type='submit'
										className='btn btn-lg bg-danger navbar-dark btn-block text-white'
									>
										Upload!
									</button>
								</form>
							</div>

							<div className='my-5 py-5'>
								<img src={SecondImg} alt={''} />
							</div>

							<div className='bg-dark p-3'>
								<div className='table-responsive'>
									<table className='table table-dark table-striped table-bordered table-hover mb-0'>
										<thead style={{ fontSize: '15px' }}>
											<tr className='bg-danger navbar-dark'>
												<th
													scope='col'
													className='text-white'
												>
													id
												</th>
												<th
													scope='col'
													className='text-white'
												>
													name
												</th>
												<th
													scope='col'
													className='text-white'
												>
													description
												</th>
												<th
													scope='col'
													className='text-white'
												>
													type
												</th>
												<th
													scope='col'
													className='text-white'
												>
													size
												</th>
												<th
													scope='col'
													className='text-white'
												>
													date
												</th>
												<th
													scope='col'
													className='text-white'
												>
													uploader/view
												</th>
												<th
													scope='col'
													className='text-white'
												>
													hash/view/get
												</th>
											</tr>
										</thead>

										{/* static test table data */}
										<tbody>
											<tr>
												<td>1 </td>
												<td>Test</td>
												<td>Test Desc</td>
												<td>Test</td>
												<td>10MB</td>
												<td>3/7</td>
												<td>Yes</td>
												<td>Yes</td>
											</tr>
										</tbody>

										{this.props.files.map((file, key) => {
											return (
												<thead
													style={{ fontSize: '12px' }}
													key={key}
												>
													<tr>
														<td>{file.fileId}</td>
														<td>{file.fileName}</td>
														<td>
															{
																file.fileDescription
															}
														</td>
														<td>{file.fileType}</td>
														<td>
															{convertBytes(
																file.fileSize
															)}
														</td>
														<td>
															{moment
																.unix(
																	file.uploadTime
																)
																.format(
																	'h:mm:ss A M/D/Y'
																)}
														</td>
														<td>
															<a
																href={
																	'https://etherscan.io/address/' +
																	file.uploader
																}
																rel='noopener noreferrer'
																target='_blank'
															>
																{file.uploader.substring(
																	0,
																	10
																)}
																...
															</a>
														</td>
														<td>
															<a
																href={
																	'https://ipfs.infura.io/ipfs/' +
																	file.fileHash
																}
																rel='noopener noreferrer'
																target='_blank'
															>
																{file.fileHash.substring(
																	0,
																	10
																)}
																...
															</a>
														</td>
													</tr>
												</thead>
											);
										})}
									</table>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default Main;
