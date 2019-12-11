package com.userfront.dao;

import com.userfront.domain.PrimaryTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrimaryTransactionDao extends JpaRepository<PrimaryTransaction, Long> {
}
